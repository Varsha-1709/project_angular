import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe4'
})
export class Pipe4Pipe implements PipeTransform {

  transform(value: string, gen:string){
    if(gen==="male"){
      return "Mr. "+value
    }
    else{
      return "Miss. "+value
    }
  }

}
