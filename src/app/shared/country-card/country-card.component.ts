import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../countries-api/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input()
  public country!: ICountry;

  constructor() { }

  ngOnInit(): void {
  }

}
