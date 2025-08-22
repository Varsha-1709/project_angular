import { Component } from '@angular/core';
import employee from './employeecruddata'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash,faEye,faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employeecrud',
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './employeecrud.html',
  styleUrl: './employeecrud.css'
})
export class Employeecrud {

  employees=employee;
  faTrash = faTrash;
  faEye=faEye;
  faEdit=faEdit;
  

   deleteemp(id:number){
   Swal.fire({   title: "Are you sure?",
   text: "You won't be able to revert this!",
  icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Yes, delete it!"
 }).then((result:any) => {
    if(result.isConfirmed){
      const index = this.employees.findIndex(emp => emp.id === id);
      if (index > -1) {
        // Remove 1 element at the found index
        this.employees.splice(index, 1);
      }
     Swal.fire({
       title: "Deleted!",
       text: "Your file has been deleted.",
       icon: "success"
     });
  }
   
  
 });
   }
  }
