import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {BootstrapStaticResult} from '../types/bootstrap-static/bootstrapStaticResult';
import {FixturesResult} from '../types/fixtures/fixturesResult';
import {Event} from '../types/bootstrap-static/event';
import {GameSettings} from '../types/bootstrap-static/gameSettings';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private http: HttpClient) {
  }

  //<editor-fold desc="https://fantasy.premierleague.com/api/bootstrap-static/">
  getBootstrapStaticResult(): Observable<BootstrapStaticResult> {
    return this.http.get<BootstrapStaticResult>('assets/data/bootstrapStatic.json');
  }

  getEvents(): Observable<Event[]>{
    return this.getBootstrapStaticResult().pipe(
      map((result: BootstrapStaticResult) => result.events)
    );
  }

  getGameSettings(): Observable<GameSettings>{
    return this.getBootstrapStaticResult().pipe(
      map((result:BootstrapStaticResult)=> result.game_settings)
    )
}

  //</editor-fold>

  //<editor-fold desc="https://fantasy.premierleague.com/api/fixtures/">
  getFixturesResult(event?: number): Observable<FixturesResult[]> {
    return this.http.get<FixturesResult[]>('assets/data/fixtures.json')
      .pipe(
        map((results: FixturesResult[]) => {
          if (event !== undefined) {
            return results.filter(result => result.event === event);
          } else {
            return results;
          }
        })
      );
  }
  //</editor-fold>

}
