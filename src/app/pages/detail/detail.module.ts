import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { CountryDetailModule } from '../../shared/country-detail/country-detail.module';
import { LogPipeModule } from '../../shared/log-pipe/log-pipe.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: DetailComponent,
      path: ''
    }]),
    CountryDetailModule,
    MatIconModule
  ]
})
export class DetailModule { }
