import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, map, Observable, tap } from 'rxjs';
import { ICountry } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  private url = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) { }

  public searchCountries(term?: string, regions?: string[]): Observable<ICountry[]> {
    const endpoint = term ? `name/${term}` : 'all';
    return this.http.get<ICountry[]>(this.url + endpoint)
      .pipe(
        debounceTime(250),
        map(countries => countries.filter(c => regions?.length ? regions.includes(c.subregion) : true ))
      );
  }
}
