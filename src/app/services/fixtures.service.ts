import {Injectable} from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FixturesResult} from '../types/fixtures/fixturesResult';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  readonly #baseURL: string = '/api/';

  #lastFixturesCallDate: Date | null;
  readonly #fixturesStorageKey = 'lastFixturesCallDate';
  #fixturesResult: Observable<FixturesResult[]>;

  constructor(private http: HttpClient) {
    this.#lastFixturesCallDate = this.#retrieveLastAPICallDateFromStorage();
    this.#fixturesResult = this.#fetchFixturesData();
  }

  //<editor-fold desc="Get">
  getAllFixturesFromFixtures(): Observable<FixturesResult[]> {
    return this.#fixturesResult;
  }

  getFixturesOfEventFromFixtures(eventId: number): Observable<FixturesResult[] | null> {
    return this.#fixturesResult.pipe(
      map((result: FixturesResult[]) => {
        const fixtures = result.filter((fix: FixturesResult) => fix.event === eventId);
        return fixtures ? fixtures : null;
      })
    );
  }

  getFixturesOfTeamFromFixtures(teamId: number): Observable<FixturesResult[] | null> {
    return this.#fixturesResult.pipe(
      map((result: FixturesResult[]) => {
        const fixtures = result.filter((fix: FixturesResult) => fix.team_h || fix.team_a === teamId);
        return fixtures ? fixtures : null;
      })
    );
  }
  //</editor-fold>

  //<editor-fold desc="Fetch Fixtures Data">
  #fetchFixturesData(): Observable<FixturesResult[]> {
    console.log('Fetching Fixtures Data');
    return this.http.get<FixturesResult[]>('assets/data/fixtures.json');
  }

  /**
   * Not implemented.
   */
  #fetchFixturesDataBug(): Observable<FixturesResult[]> {
    const currentDate = new Date();
    if (!this.#lastFixturesCallDate || !this.#isSameDay(this.#lastFixturesCallDate, currentDate)) {
      return this.http.get<FixturesResult[]>('assets/data/bootstrapStatic.json').pipe(
        tap(result => {
          this.#lastFixturesCallDate = currentDate;
          this.#saveLastAPICallDateToStorage();
          this.#fixturesResult = of(result); // Cache the result
        })
      );
    } else {
      return this.#fixturesResult; // Return the cached result
    }
  }

  //</editor-fold>

  //<editor-fold desc="Retrieve and save last API call date">
  #retrieveLastAPICallDateFromStorage(): Date | null {
    const storedDate = localStorage.getItem(this.#fixturesStorageKey);
    return storedDate ? new Date(storedDate) : null;
  }

  #saveLastAPICallDateToStorage(): void {
    if (this.#lastFixturesCallDate)
      localStorage.setItem(this.#fixturesStorageKey, this.#lastFixturesCallDate.toISOString());
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

  //</editor-fold>
}
