import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, filter, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { CountriesApiService } from '../../shared/countries-api/countries-api.service';
import { ICountry } from '../../shared/countries-api/country';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  public searchForm: FormGroup = new FormGroup({
    search: new FormControl(),
    region: new FormControl()
  });
  public filterOpts: string[] = [];


  public countries$: Observable<ICountry[]> = this.searchForm.valueChanges.pipe(
    debounceTime(250),
    switchMap((formValue) => {
      return this.countries.searchCountries(formValue.search, formValue.region);
    }),
    tap(res => {
      if (!this.filterOpts.length) {
        this.filterOpts = [...new Set(res.map(c => c.subregion))];
      }
    })
  );

  constructor(
    private countries: CountriesApiService
  ) { }

  ngAfterViewInit(): void {
    // Kick of initial search
    this.searchForm.setValue({ search: '', region: '' });
  }
}
