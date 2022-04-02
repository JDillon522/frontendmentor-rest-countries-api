import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';
import { CountriesApiService, IDetailRes } from '../../shared/countries-api/countries-api.service';

@Component({
  selector: 'app-detail',
  template: `
    {{previousUrl$ | async | logPipe}}
    <a [routerLink]="(previousUrl$ | async)">Back</a>

    <app-country-detail [country]="(details$ | async)!" [borderingCountries]="(borderCountries$ | async)!"></app-country-detail>
  `,
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public details$ = this.route.paramMap.pipe(
    switchMap(params => {
      return this.api.getCountryDetails(params.get('countryId')!);
    }),
    tap(detail => {
      if (detail.borders) {
        this.borderCountries$ = this.api.getBorderingCountryNames(detail.borders);
      } else {
        this.borderCountries$ = of([])
      }
    })
  );

  public borderCountries$!: Observable<IDetailRes[]>;
  public previousUrl$ = this.api.previousUrl$;

  constructor(
    private route: ActivatedRoute,
    private api: CountriesApiService
  ) { }

  ngOnInit(): void {
  }

}
