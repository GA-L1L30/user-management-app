import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'compactNumber'
})
export class CompactNumberPipe implements PipeTransform {

  transform(value: number): string {

    if (value >= 1000000) {
      const millions = Math.floor(value / 1000000);
      return `${millions} million`;
    }

    if (value >= 1000) {
      const thosusands = Math.floor(value / 1000);
      return `${thosusands} mil`;
    }

    return value.toString();
  }
}
