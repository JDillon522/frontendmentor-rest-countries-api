import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, map, Observable, switchMap, take } from 'rxjs';
import { CountriesApiService } from '../../shared/countries-api/countries-api.service';
import { ICountry } from '../../shared/countries-api/country';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  public search = new FormControl();

  public countries$: Observable<ICountry[]> = this.search.valueChanges.pipe(
    debounceTime(250),
    switchMap((searchTerm) => this.countries.searchCountries(searchTerm))
  );

  constructor(
    private countries: CountriesApiService
  ) { }

  ngAfterViewInit(): void {
    // Kick of initial search
    this.search.setValue('');
  }
}
