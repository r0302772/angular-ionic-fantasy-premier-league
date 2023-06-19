import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Prize, PrizesResult} from '../types/prizes/prizesResult';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrizesService {

  #prizesResult: Observable<PrizesResult>;

  constructor(private http: HttpClient) {
    this.#prizesResult = this.#fetchPrizesData();
  }

  //<editor-fold desc="Get">
  getOverallPrizesFromPrizes(): Observable<Prize[]> {
    return this.#prizesResult.pipe(
      map((result: PrizesResult) => result.overallPrizes)
    );
  }

  getMonthlyPrizesFromPrizes(): Observable<Prize[]> {
    return this.#prizesResult.pipe(
      map((result: PrizesResult) => result.monthlyPrizes)
    );
  }

  getWeeklyPrizesFromPrizes(): Observable<Prize[]> {
    return this.#prizesResult.pipe(
      map((result: PrizesResult) => result.weeklyPrizes)
    );
  }

  getSecondChancePrizesFromPrizes(): Observable<Prize[]> {
    return this.#prizesResult.pipe(
      map((result: PrizesResult) => result.secondChancePrizes)
    );
  }

  //</editor-fold>

  //<editor-fold desc="Fetch Prizes Data">
  #fetchPrizesData(): Observable<PrizesResult> {
    console.log('Fetching Prizes Data');
    return this.http.get<PrizesResult>('assets/data/prizes.json');
  }

  //</editor-fold>
}
