import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly #baseURL: string = '/api/';
  readonly #localhostAPI: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {
  }

  //API Endpoint set to localhostAPI for development, change to baseURL for production
  fetchData<T>(endpoint: string): Observable<T> {
    console.log(`Fetching data from endpoint: ${endpoint}`);
    return this.http.get<T>(`${this.#localhostAPI}${endpoint}`, {
        observe: 'body',
        responseType: 'json'
      }
    );
  }

  patchData<T>(endpoint: string, data: T): Observable<T> {
    console.log(`Patching data on endpoint: ${endpoint}`);
    return this.http.patch<T>(`${this.#localhostAPI}${endpoint}`, data);
  }
}
