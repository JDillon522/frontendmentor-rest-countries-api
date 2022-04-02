import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logPipe'
})
export class LogPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
    console.log(value);
  }

}
