import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['a'],
  outputs:['delemp']
})
export class EmployeeTable {
  a:any;
  delemp= new EventEmitter();
  ondel(eId:number){
    this.delemp.emit(eId);
  }
  }


