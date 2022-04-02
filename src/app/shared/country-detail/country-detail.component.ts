import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesApiService, IDetailRes } from '../countries-api/countries-api.service';
import { ICountry } from '../countries-api/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  @Input()
  public country!: ICountry;

  @Input()
  public borderingCountries: IDetailRes[] = [];

  get nativeName(): string {
    if (!this.country) {
      return '';
    }

    const lang = Object.keys(this.country.languages)[0];
    return this.country.name.nativeName[lang].official;
  }

  get languages(): string {
    if (!this.country?.languages) {
      return '';
    }

    const langs = Object.values(this.country.languages);
    return langs.join(', ');
  }

  get currencies(): string {
    if (!this.country?.currencies) {
      return '';
    }

    const currencies = Object.values(this.country.currencies).map(c => c.name);
    return currencies.join(', ');
  }

  constructor(
    private api: CountriesApiService
  ) { }

  ngOnInit(): void {
  }

}
