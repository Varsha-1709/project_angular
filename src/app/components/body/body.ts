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
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { Empcrud } from '../empcrud/empcrud';
import { TrafficDemo } from '../traffic-demo/traffic-demo';
import { Math1Demo } from '../math1-demo/math1-demo';
import { Math2Demo } from '../math2-demo/math2-demo';
import { EmployeeComponent } from '../employee-component/employee-component';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { Productsassign } from '../productsassign/productsassign';
import { CommentList } from '../comment-list/comment-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { SubjectEmployees } from '../subject-employees/subject-employees';
import { SignalDemo } from '../signal-demo/signal-demo';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { SignalAssign } from '../signal-assign/signal-assign';
import { TemplateDrivenForm } from '../template-driven-form/template-driven-form';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { RegForm } from '../reg-form/reg-form';

@Component({
  selector: 'app-body',
  imports: [RegForm],
  templateUrl: './body.html',
  styleUrl: './body.css',
  //encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
