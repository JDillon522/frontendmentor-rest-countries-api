import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, catchError, combineLatest, debounceTime, filter, forkJoin, map, Observable, of, onErrorResumeNext, tap, withLatestFrom, zip } from 'rxjs';
import { ICountry } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  private url = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ) {

   }

  public searchCountries(term?: string, regions?: string[]): Observable<ICountry[]> {
    const endpoint = term ? `/name/${term}` : '/all';
    return this.http.get<ICountry[]>(this.url + endpoint)
      .pipe(
        debounceTime(250),
        map(countries => countries.filter(c => regions?.length ? regions.includes(c.subregion) : true ))
      );
  }

  public getCountryDetails(name: string): Observable<ICountry> {
    return this.http.get<ICountry[]>(`${this.url}/alpha/${name}`)
      .pipe(
        map(countries => countries[0])
      );
  }


  public getBorderingCountryNames(countryAbr: string[]): Observable<IDetailRes[]> {
    const requests = countryAbr.map(c => {
      return this.getCountryDetails(c).pipe(
        catchError(err => of(null))
      )
    }) as Observable<ICountry>[];

    return zip(requests).pipe(
      map(countries => {
        return countries
          .filter(c => c)
          .map(c => {
            return {
              name: c.name.common,
              code: c.ccn3
            }
          })
      })
    );
  }
}

export interface IDetailRes {name: string, code: string};
