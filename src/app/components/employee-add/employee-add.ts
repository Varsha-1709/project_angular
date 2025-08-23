import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['addemployee']
})
export class EmployeeAdd {
  new_emp:any={
    eId:null,
    name:"",
    sal:null,
    gender:""
  }
  addemployee= new EventEmitter<any>();
  addemp(value:any){
    this.addemployee.emit(this.new_emp)
    this.new_emp={
      eId:null,
      name:"",
    sal:null,
    gender:""

    }
  }

}
