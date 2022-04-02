import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, map, Observable } from 'rxjs';
import { ICountry } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  // private countries$$: BehaviorSubject<ICountry[]> = new BehaviorSubject<ICountry[]>([]);
  // public countries$ = this.countries$$.asObservable();

  private url = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) { }

  public searchCountries(term?: string): Observable<ICountry[]> {
    const endpoint = term ? `name/${term}` : 'all';
    return this.http.get<ICountry[]>(this.url + endpoint)
      .pipe(
        debounceTime(250),
      );
  }
}
