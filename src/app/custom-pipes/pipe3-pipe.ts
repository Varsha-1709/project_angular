import { Pipe, PipeTransform } from '@angular/core';
import { Agent } from 'node:http';

@Pipe({
  name: 'pipe3'
})
export class Pipe3Pipe implements PipeTransform {

  transform(value: string){
    if(!value) return '';
    const birthdate=new Date(value);
    const today = new Date();
    let today_year=today.getFullYear();
    let birthday_year=birthdate.getFullYear();
    let age=today_year-birthday_year;
    return age;

  }

}
