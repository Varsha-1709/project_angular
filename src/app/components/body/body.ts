import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import {Directives} from '../directives/directives';
import { Tablecard } from '../tablecard/tablecard';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { EmployeeList } from '../employee-list/employee-list';
import { Products } from '../products/products';
import { Demo1 } from '../demo1/demo1';
import { Employeecrud } from '../employeecrud/employeecrud';
import { Employeeassignment } from '../employeeassignment/employeeassignment';
import { PipesDemo } from "../pipes-demo/pipes-demo";
import { PipesAssign } from '../pipes-assign/pipes-assign';
import { ParentDemo } from '../parent-demo/parent-demo';

@Component({
  selector: 'app-body',
  imports: [PipesAssign],
  templateUrl: './body.html',
  styleUrl: './body.css',
  //encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
