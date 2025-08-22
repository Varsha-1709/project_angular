import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  myName: string = 'Virat Kohli';
  img_url: string = 'https://shorturl.at/Pit2d';

  flag: boolean = true;

  addToCart() {
    alert('Your Item is adde to Cart!!!');
  }

  isvisible:boolean=true;
  checkdisplay(){
    if(this.isvisible){
      this.isvisible=false;
    }
    else{
      this.isvisible=true;
    }
  }
  showhide(){
    if(this.isvisible){
      return 'block';
    }
    else{
      return "none";
    }
  }

  maxlen: number=10;
  ip:string='';

  st:string='';
  
  msg:string='';

  selectedstate:string='';

  num1:number=0;
  num2:number=0;
  op:string='';
  calculatedResult:number=0;
  calculate(){
    switch(this.op){
      case '+': this.calculatedResult=this.num1+this.num2;break;
      case '-': this.calculatedResult=this.num1-this.num2;break;
      case '*': this.calculatedResult=this.num1*this.num2;break;
      case '/': this.calculatedResult=this.num1/this.num2;break;
    }
  }

  count: number=0;

  toggleTheme(){
    this.flag=!this.flag;
    if(this.flag){
      document.body.style.backgroundColor='black';
    }else{
      document.body.style.backgroundColor='white';
    }
  }

  addResult=0;
  addition(num3:string,num4:string){
    this.addResult=+num3 + +num4;
  }
  
}