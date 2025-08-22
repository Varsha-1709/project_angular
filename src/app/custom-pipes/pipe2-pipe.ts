import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2'
})
export class Pipe2Pipe implements PipeTransform {

  transform(num: number): string {
    if(!num||num<=0) return '';
    const roman:{value:number;symbol:string}[]=[
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
    let res='';
    for(let i=0;i<roman.length;i++){
      while(num>=roman[i].value){
        res+=roman[i].symbol;
        num-=roman[i].value;
      }

    }
    return res
  }
}
