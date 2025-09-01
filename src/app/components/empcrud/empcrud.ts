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
  //declaring the array employees in parent and sending to child, table

  delemp(eId:number){
    this.employees=this.employees.filter(emp=>emp.eId!==eId);
    //takes eId as input, creates new array by filtering out
    //employees whose EmpId matches
    //after deleting reassigns the new array after deleting to this.employees
  }

  updatedarr(value:any){
    this.employees=value
    //replaces the entire employees array with incoming array
  }

  addemp(value:any){
    this.employees=[...this.employees,value];
    //it is called from (addemployee) in child-add
    //takes the new employee object 
    //spreads the xisting array and appends newly added item
  }

}
