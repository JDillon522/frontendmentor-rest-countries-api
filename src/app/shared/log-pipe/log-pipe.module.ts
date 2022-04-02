import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogPipePipe } from './log-pipe.pipe';



@NgModule({
  declarations: [
    LogPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogPipePipe
  ]
})
export class LogPipeModule { }
