import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tablecard',
  imports: [FormsModule,CommonModule],
  templateUrl: './tablecard.html',
  styleUrl: './tablecard.css'
})
export class Tablecard {
employees = [
  { id: 1, name: 'John', role: 'Manager', salary: 85000, status: 'Active' },
  { id: 2, name: 'Alice', role: 'Developer', salary: 45000, status: 'Active' },
  { id: 3, name: 'Bob', role: 'Tester', salary: 30000, status: 'Inactive' },
  { id: 4, name: 'Eve', role: 'HR', salary: 40000, status: 'Active' }
];

flag:boolean=true;
toggle(){this.flag=!this.flag;}
  
getSal(emp:any){
  return{
    color: emp.salary>50000?'green':'red',
    'font-weight':emp.salary>50000?'bold':'normal'
  };
}

getRowStyle(emp:any){
  let bgColor:string;
  switch(emp.role){
    case 'Manager':
      bgColor='lightyellow';
      break;
    case 'Developer':
    bgColor='lightblue';
    break;
      case 'Tester':
      bgColor='lightpink';
      break;
      default:
      bgColor='white';
  }
  if(emp.status==='Inactive'){
    bgColor:'#f8d7da';
  }
  return {'background-color':bgColor};

}

}

