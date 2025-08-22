import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe5'
})
export class Pipe5Pipe implements PipeTransform {

  transform(emp:any,searchstring:string){
    if(!searchstring){
      return emp
    }
    else{
      return emp.filter((emp:any)=>emp.eId===+searchstring);
    }
  }

}
