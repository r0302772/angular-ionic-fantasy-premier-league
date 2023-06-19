import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BootstrapStaticResult} from '../types/bootstrap-static/bootstrapStaticResult';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly #baseURL: string = '/api/';

  constructor(private http: HttpClient) {
  }

  getBootstrapStatic(): Observable<BootstrapStaticResult> {
    return this.http.get<BootstrapStaticResult>(
      `${this.#baseURL}bootstrap-static/`, {
        observe:'body',
        responseType:'json'
      }
    );
  }
}
