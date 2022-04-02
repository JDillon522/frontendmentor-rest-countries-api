import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailComponent } from './country-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CountryDetailComponent
  ]
})
export class CountryDetailModule { }
