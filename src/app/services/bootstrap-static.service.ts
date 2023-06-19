import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, map, Observable, of, tap} from 'rxjs';
import {BootstrapStaticResult} from '../types/bootstrap-static/bootstrapStaticResult';
import {Event} from '../types/bootstrap-static/event';
import {GameSettings} from '../types/bootstrap-static/gameSettings';
import {Phase} from '../types/bootstrap-static/phase';
import {Team} from '../types/bootstrap-static/team';
import {Element} from '../types/bootstrap-static/element';
import {ElementStat} from '../types/bootstrap-static/elementStat';
import {ElementType} from '../types/bootstrap-static/elementType';
import {FixturesService} from './fixtures.service';
import {FixturesResult} from '../types/fixtures/fixturesResult';

@Injectable({
  providedIn: 'root'
})
export class BootstrapStaticService {

  readonly #baseURL: string = '/api/';

  #lastBootstrapStaticCallDate: Date | null;
  readonly #bootstrapStaticStorageKey = 'lastBootstrapStaticCallDate';
  #bootstrapStaticResult: Observable<BootstrapStaticResult>;

  constructor(private http: HttpClient, private fixturesService: FixturesService) {
    this.#lastBootstrapStaticCallDate = this.#retrieveLastAPICallDateFromStorage();
    this.#bootstrapStaticResult = this.#fetchBootstrapStaticData();
  }

  //<editor-fold desc="Get">
  getEventsFromBootstrapStatic(): Observable<Event[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.events)
    );
  }

  getGameSettingsFromBootstrapStatic(): Observable<GameSettings> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.game_settings)
    );
  }

  getPhasesFromBootstrapStatic(): Observable<Phase[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.phases)
    );
  }

  getTeamsFromBootstrapStatic(): Observable<Team[]> {
    const fixtures = this.fixturesService.getAllFixturesFromFixtures();
    const teams = this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.teams)
    );

    return combineLatest([teams, fixtures]).pipe(
      map(([teams, fixtures]) => {
        for (const team of teams) {
          this.#updateTeamStatistics(team, fixtures);}

        const sortedTeams = teams.sort((a, b) => b.points - a.points);
        for (const [index, team] of sortedTeams.entries()) {
          team.position = index + 1;
        }
        return sortedTeams;
      })
    );
  }

  getTeamById(teamId: number): Observable<Team | null> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const team = result.teams.find((team: Team) => team.id === teamId);
        return team ? team : null;
      })
    );
  }

  getTotalPlayersFromBootstrapStatic(): Observable<number> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.total_players)
    );
  }

  getElementsFromBootstrapStatic(): Observable<Element[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.elements)
    );
  }

  getElementById(elementId: number): Observable<Element | null> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const element = result.elements.find((el: Element) => el.id === elementId);
        return element ? element : null;
      })
    );
  }

  getElementsByTeamId(teamId: number): Observable<Element[] | null> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const elements = result.elements.filter((el: Element) => el.team === teamId);
        return elements ? elements : null;
      })
    );
  }

  getElementStatsFromBootstrapStatic(): Observable<ElementStat[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.element_stats)
    );
  }

  getElementTypesFromBootstrapStatic(): Observable<ElementType[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.element_types)
    );
  }

  //</editor-fold>

  //<editor-fold desc="Fetch Bootstrap Static Data">
  #fetchBootstrapStaticData(): Observable<BootstrapStaticResult> {
    console.log('Fetching Bootstrap Static Data');
    return this.http.get<BootstrapStaticResult>('assets/data/bootstrapStatic.json');
  }

  /**
   * Not implemented.
   */
  #fetchBootstrapStaticDataBug(): Observable<BootstrapStaticResult> {
    const currentDate = new Date();
    if (!this.#lastBootstrapStaticCallDate || !this.#isSameDay(this.#lastBootstrapStaticCallDate, currentDate)) {
      return this.http.get<BootstrapStaticResult>('assets/data/bootstrapStatic.json').pipe(
        tap(result => {
          this.#lastBootstrapStaticCallDate = currentDate;
          this.#saveLastAPICallDateToStorage();
          this.#bootstrapStaticResult = of(result); // Cache the result
        })
      );
    } else {
      return this.#bootstrapStaticResult; // Return the cached result
    }
  }

  //</editor-fold>

  //<editor-fold desc="Retrieve and save last API call date">
  #retrieveLastAPICallDateFromStorage(): Date | null {
    const storedDate = localStorage.getItem(this.#bootstrapStaticStorageKey);
    return storedDate ? new Date(storedDate) : null;
  }

  #saveLastAPICallDateToStorage(): void {
    if (this.#lastBootstrapStaticCallDate)
      localStorage.setItem(this.#bootstrapStaticStorageKey, this.#lastBootstrapStaticCallDate.toISOString());
  }

  //</editor-fold>

  //<editor-fold desc="Helpers">
  #isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  #updateTeamStatistics(team: Team, fixtures: FixturesResult[]): void {
    team.goals_for = 0;
    team.goals_against = 0;

    for (const fixture of fixtures) {
      if (fixture.finished) {
        if (fixture.team_h === team.id) {
          team.played++;
          team.goals_for += fixture.team_h_score;
          team.goals_against += fixture.team_a_score;
          if (fixture.team_h_score > fixture.team_a_score) {
            team.win++;
          } else if (fixture.team_h_score === fixture.team_a_score) {
            team.draw++;
          } else {
            team.loss++;
          }
        } else if (fixture.team_a === team.id) {
          team.played++;
          team.goals_for += fixture.team_a_score;
          team.goals_against += fixture.team_h_score;
          if (fixture.team_a_score > fixture.team_h_score) {
            team.win++;
          } else if (fixture.team_a_score === fixture.team_h_score) {
            team.draw++;
          } else {
            team.loss++;
          }
        }
      }
    }
    team.goal_difference = team.goals_for - team.goals_against;
    team.points = team.win * 3 + team.draw;
  }

  //</editor-fold>
}
