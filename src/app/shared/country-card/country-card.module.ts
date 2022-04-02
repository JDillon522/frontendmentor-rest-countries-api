import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountryCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CountryCardComponent
  ]
})
export class CountryCardModule { }
