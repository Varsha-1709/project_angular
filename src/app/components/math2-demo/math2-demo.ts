import { Component,inject } from '@angular/core';
import {Math} from './../../services/math';

@Component({
  selector: 'app-math2-demo',
  imports: [],
  templateUrl: './math2-demo.html',
  styleUrl: './math2-demo.css'
})
export class Math2Demo {
  mathService=inject(Math); //dependency injection

  ngOnInit(){
    console.log(`I am MAth2 Component`)
    console.log(`Addition of 100 and 200 is ${this.mathService.add(100,200)}`)
    console.log(`Addition of 100 and 200 is ${this.mathService.mul(100,200)}`)
  }

}
