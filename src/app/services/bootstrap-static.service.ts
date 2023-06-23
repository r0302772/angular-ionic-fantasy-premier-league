import {Injectable} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
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
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BootstrapStaticService {

  #lastBootstrapStaticCallDate: Date | null;
  readonly #bootstrapStaticStorageKey = 'lastBootstrapStaticCallDate';
  #bootstrapStaticResult: Observable<BootstrapStaticResult>;

  constructor(private fixturesService: FixturesService, private apiService: ApiService) {
    this.#lastBootstrapStaticCallDate = this.#retrieveLastAPICallDateFromStorage();
    this.#bootstrapStaticResult = this.#fetchBootstrapStaticData();
  }

  //region Get

  //region Events
  getEventsFromBootstrapStatic(): Observable<Event[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.events)
    );
  }

  getEventById(eventId: number): Observable<Event> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const event = result.events.find((event: Event) => event.id === eventId);
        if (event) {
          return event;
        } else {
          throw new Error(`Phase with id ${eventId} not found`);
        }
      })
    );
  }
  //endregion

  getGameSettingsFromBootstrapStatic(): Observable<GameSettings> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.game_settings)
    );
  }

  //region Phases
  getPhasesFromBootstrapStatic(): Observable<Phase[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.phases)
    );
  }

  getPhaseById(phaseId: number): Observable<Phase> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const phase = result.phases.find((phase: Phase) => phase.id === phaseId);
        if (phase) {
          return phase;
        } else {
          throw new Error(`Phase with id ${phaseId} not found`);
        }
      })
    );
  }
  //endregion

  //region Teams
  getTeamsFromBootstrapStatic(): Observable<Team[]> {
    const fixtures = this.fixturesService.getAllFixturesFromFixtures();
    const teams = this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.teams)
    );

    return combineLatest([teams, fixtures]).pipe(
      map(([teams, fixtures]) => {
        for (const team of teams) {
          this.#updateTeamStatistics(team, fixtures);
        }

        const sortedTeams = teams.sort((a, b) => b.points - a.points);
        for (const [index, team] of sortedTeams.entries()) {
          team.position = index + 1;
        }
        return sortedTeams;
      })
    );
  }

  getTeamById(teamId: number): Observable<Team> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const team = result.teams.find((team: Team) => team.id === teamId);
        if (team) {
          return team;
        } else {
          throw new Error(`Team with id ${teamId} not found`);
        }
      })
    );
  }
  //endregion

  getTotalPlayersFromBootstrapStatic(): Observable<number> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.total_players)
    );
  }

  //region Elements
  getElementsFromBootstrapStatic(): Observable<Element[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.elements)
    );
  }

  getElementById(elementId: number): Observable<Element> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const element = result.elements.find((el: Element) => el.id === elementId);
        if (element) {
          return element;
        } else {
          throw new Error('Element not found');
        }
      })
    );
  }

  getElementsByTeamId(teamId: number): Observable<Element[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const elements = result.elements.filter((el: Element) => el.team === teamId);
        if (elements) {
          return elements;
        } else {
          throw new Error(`Elements of team ${teamId} not found`);
        }
      })
    );
  }

  //endregion

  //region Element Stats
  getElementStatsFromBootstrapStatic(): Observable<ElementStat[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.element_stats)
    );
  }

  getElementStatByName(elementStatName: string): Observable<ElementStat> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const elementStat = result.element_stats.find((el: ElementStat) => el.name === elementStatName);
        if (elementStat) {
          return elementStat;
        } else {
          throw new Error(`Element stat ${elementStatName} not found`);
        }
      })
    );
  }

  //endregion

  //region Element Types
  getElementTypesFromBootstrapStatic(): Observable<ElementType[]> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => result.element_types)
    );
  }

  getElementTypeById(elementTypeId: number): Observable<ElementType> {
    return this.#bootstrapStaticResult.pipe(
      map((result: BootstrapStaticResult) => {
        const elementType = result.element_types.find((el: ElementType) => el.id === elementTypeId);
        if (elementType) {
          return elementType;
        } else {
          throw new Error(`Element type ${elementTypeId} not found`);
        }
      })
    );
  }

  //endregion

  //endregion

  //region Fetch Bootstrap Static Data
  #fetchBootstrapStaticData(): Observable<BootstrapStaticResult> {
    return this.apiService.fetchData('bootstrap-static');
  }

  //endregion

  //region Retrieve and save last API call date
  #retrieveLastAPICallDateFromStorage(): Date | null {
    const storedDate = localStorage.getItem(this.#bootstrapStaticStorageKey);
    return storedDate ? new Date(storedDate) : null;
  }

  #saveLastAPICallDateToStorage(): void {
    if (this.#lastBootstrapStaticCallDate)
      localStorage.setItem(this.#bootstrapStaticStorageKey, this.#lastBootstrapStaticCallDate.toISOString());
  }

  //endregion

  //region Helpers
  #isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  #updateTeamStatistics(team: Team, fixtures: FixturesResult[]): void {
    team.goals_scored = 0;
    team.goals_conceded = 0;

    for (const fixture of fixtures) {
      if (fixture.finished) {
        if (fixture.team_h === team.id) {
          team.played++;
          team.goals_scored += fixture.team_h_score;
          team.goals_conceded += fixture.team_a_score;
          if (fixture.team_h_score > fixture.team_a_score) {
            team.win++;
          } else if (fixture.team_h_score === fixture.team_a_score) {
            team.draw++;
          } else {
            team.loss++;
          }
        } else if (fixture.team_a === team.id) {
          team.played++;
          team.goals_scored += fixture.team_a_score;
          team.goals_conceded += fixture.team_h_score;
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
    team.goal_difference = team.goals_scored - team.goals_conceded;
    team.points = team.win * 3 + team.draw;
  }

  //endregion

}
