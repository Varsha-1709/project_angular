import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe5'
})
export class Pipe5Pipe implements PipeTransform {

  transform(employees:any[],searchstring:string): any[]{
    if(!employees) return [];
    if(!searchstring) return employees;
    searchstring = searchstring.toLowerCase();
    return employees.filter(emp=>
      emp.eId.toString().includes(searchstring) ||
      emp.name.toLowerCase().includes(searchstring) ||
      emp.sal.toString().includes(searchstring) ||
      emp.gender.toLowerCase().includes(searchstring)

    );
  }

}
