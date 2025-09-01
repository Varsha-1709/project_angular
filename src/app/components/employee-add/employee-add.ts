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
  } //created an object

  addemployee= new EventEmitter(); //emitter instance
  
  addemp(value:any){  //it is called by button
    this.addemployee.emit(this.new_emp) //calls event addemployee by sending new_emp object to parent as 
    this.new_emp={
      eId:null,
      name:"",
    sal:null,
    gender:""

    }
  }

}
