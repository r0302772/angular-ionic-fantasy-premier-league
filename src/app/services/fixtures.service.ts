import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {FixturesResult} from '../types/fixtures/fixturesResult';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  readonly #baseURL: string = '/api/';

  #lastFixturesCallDate: Date | null;
  readonly #fixturesStorageKey = 'lastFixturesCallDate';
  readonly #fixturesResult: Observable<FixturesResult[]>;

  //#preSeasonFixtures: Observable<FixturesResult[]>;

  constructor(private apiService: ApiService) {
    this.#lastFixturesCallDate = this.#retrieveLastAPICallDateFromStorage();
    this.#fixturesResult = this.#fetchFixturesData();
  }

  //region Get
  getAllFixturesFromFixtures(): Observable<FixturesResult[]> {
    return this.#fixturesResult;
  }

  getFixturesOfEventFromFixtures(eventId: number): Observable<FixturesResult[]> {
    return this.#fixturesResult.pipe(
      map((result: FixturesResult[]) => {
        const fixtures = result.filter((fix: FixturesResult) => fix.event === eventId);
        if (fixtures) {
          return fixtures;
        } else {
          throw new Error(`Fixtures of event ${eventId} not found`);
        }
      })
    );
  }

  getFixturesOfTeamFromFixtures(teamId: number): Observable<FixturesResult[]> {
    return this.#fixturesResult.pipe(
      map((result: FixturesResult[]) => {
        const fixtures = result.filter((fix: FixturesResult) => fix.team_h === teamId || fix.team_a === teamId);
        if (fixtures) {
          return fixtures;
        } else {
          throw new Error(`Fixtures of team ${teamId} not found`);
        }
      })
    );
  }

  //endregion

  //region Fetch Fixtures Data
  #fetchFixturesData(): Observable<FixturesResult[]> {
    return this.apiService.fetchData('fixtures');
  }
  //endregion

  //region Retrieve and save last API call date
  #retrieveLastAPICallDateFromStorage(): Date | null {
    const storedDate = localStorage.getItem(this.#fixturesStorageKey);
    return storedDate ? new Date(storedDate) : null;
  }

  #saveLastAPICallDateToStorage(): void {
    if (this.#lastFixturesCallDate)
      localStorage.setItem(this.#fixturesStorageKey, this.#lastFixturesCallDate.toISOString());
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

  //endregion

  getSelectedTeamsByGameweek(): Observable<Promise<{
    gameweek: number; selectedTeams: { team: number; opponentDifficulty: number }[]
  }[]>> {
    console.time('Looper');
    return this.#fixturesResult.pipe(
      map(async (fixtures: FixturesResult[]) => {
        const selectedTeamsByGameweek: { gameweek: number; selectedTeams: { team: number; opponentDifficulty: number }[] }[] = [];

        const gameweeks = this.groupFixturesByGameweek(fixtures);

        for (let gameweek = 0; gameweek < gameweeks.length; gameweek++) {
          const opponentDifficulty: { [team: number]: { totalDifficulty: number; count: number } } = {};

          const gameweekFixtures = gameweeks[gameweek];
          gameweekFixtures.forEach((fixture) => {
            const teamH = fixture.team_h;
            const teamA = fixture.team_a;
            if (!opponentDifficulty[teamH]) {
              opponentDifficulty[teamH] = {totalDifficulty: 0, count: 0};
            }
            if (!opponentDifficulty[teamA]) {
              opponentDifficulty[teamA] = {totalDifficulty: 0, count: 0};
            }
            opponentDifficulty[teamH].totalDifficulty += fixture.team_h_difficulty;
            opponentDifficulty[teamH].count++;
            opponentDifficulty[teamA].totalDifficulty += fixture.team_a_difficulty;
            opponentDifficulty[teamA].count++;
          });

          const sortedTeams = await Promise.all(
            Object.keys(opponentDifficulty)
              .sort(
                (a, b) =>
                  opponentDifficulty[Number(a)].totalDifficulty / opponentDifficulty[Number(a)].count -
                  opponentDifficulty[Number(b)].totalDifficulty / opponentDifficulty[Number(b)].count
              )
              .map(async (team) => ({
                team: Number(team),
                opponentDifficulty:
                  opponentDifficulty[Number(team)].totalDifficulty / opponentDifficulty[Number(team)].count,
              }))
          );

          selectedTeamsByGameweek.push({gameweek, selectedTeams: sortedTeams});
        }
        console.log(selectedTeamsByGameweek);
        console.timeEnd('Looper');
        return selectedTeamsByGameweek;
      })
    );
  }

  private groupFixturesByGameweek(fixtures: FixturesResult[]): FixturesResult[][] {
    const gameweeks: FixturesResult[][] = [];

    let currentGameweekFixtures: FixturesResult[] = [];
    let currentGameweek = 1;

    for (const fixture of fixtures) {
      if (fixture.event === currentGameweek) {
        currentGameweekFixtures.push(fixture);
      } else {
        gameweeks.push(currentGameweekFixtures);
        currentGameweekFixtures = [fixture];
        currentGameweek = fixture.event;
      }
    }

    gameweeks.push(currentGameweekFixtures);

    return gameweeks;
  }

}
