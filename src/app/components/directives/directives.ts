
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule,CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  flag:boolean=true;
  num:number=4;
 // statesArr=[]
  statesArr=['Odisha','Andhra Pradesh','Karnataka','TamiNadu','Kerala'];

  employees = [
    { "Id": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "Id": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "Id": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "Id": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "Id": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
//  maleemployees= this.employees.filter(emp=>emp.gender=='male');

myStyle1={
  "color":"red",
  "border":"5px dotted green",
  "margin":"10px"
}

myStyle2={
  "color":"yellow",
  "border":"5px dotted blue",
  "margin":"20px"
}

myFunction(){
  return this.num%2==0?this.myStyle1:this.myStyle2;
}

  
}


