import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-component',
  imports: [FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css'
})
export class EmployeeComponent {

  ipvalue:string="allemp";
  employees: any[]=[];
  constructor(private empService:EmployeeService){ //Dependecy Injection

  }


  ngOnInit(){
    //console.log("Get all employees array is:",this.empService.getAllEmployees());
    //console.log("Get all female array is:",this.empService.getMaleEmployees());
    //console.log("Get all employees array is:",this.empService.getFemaleEmployees());
    this.loademp();
  }

  loademp(){
    if(this.ipvalue==='maleemp'){
      this.employees=this.empService.getMaleEmployees();
    }
    else if(this.ipvalue==="femaleemp"){
      this.employees=this.empService.getFemaleEmployees();

    }else{
      this.employees=this.empService.getAllEmployees();
    }
  }


  

}
