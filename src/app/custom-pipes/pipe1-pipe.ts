import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

 transform(value: number): string {
    if (value == null) return '';
    const j = value % 10;

    if (j == 1 ) {
      return value + 'st';
    }
    if (j == 2 ) {
      return value + 'nd';
    }
    if (j == 3 ) {
      return value + 'rd';
    }
    return value + 'th';
  }
}


