import { Component } from '@angular/core';
import { EmployeeAdd } from '../employee-add/employee-add';
import { EmployeeTable } from '../employee-table/employee-table';

@Component({
  selector: 'app-empcrud',
  imports: [EmployeeAdd,EmployeeTable],
  templateUrl: './empcrud.html',
  styleUrl: './empcrud.css'
})
export class Empcrud {
   employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  delemp(eId:number){
    this.employees=this.employees.filter(emp=>emp.eId!==eId);
  }

  updatedarr(value:any){
    this.employees=value
  }

  addemp(value:any){
    this.employees=[...this.employees,value];
  }

}
