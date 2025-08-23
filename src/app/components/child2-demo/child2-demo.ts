import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs:['achild2'],
  outputs:['nameEvent']
})
export class Child2Demo {
  achild2:any;
  b:number=200;
  name:string='Eureka Infotech';
  nameEvent = new EventEmitter();
  sendDataToParent(){
    this.nameEvent.emit(this.name);
  }

}
