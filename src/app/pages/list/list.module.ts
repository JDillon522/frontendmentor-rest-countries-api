import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { CountriesApiModule } from '../../shared/countries-api/countries-api.module';
import { CountryCardModule } from '../../shared/country-card/country-card.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: ListComponent,
      path: ''
    }]),
    CountriesApiModule,
    CountryCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class ListModule { }
