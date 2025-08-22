import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  //pure:false //impure pipe
})
export class RemainingPipe implements PipeTransform {

  transform(input:string,maxLength=100){
    console.log('Remaining pipe...')
return maxLength-input.length;
  }
}
