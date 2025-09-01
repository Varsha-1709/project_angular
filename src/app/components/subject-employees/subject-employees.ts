import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeSubject } from '../../services/employee-subject';
import { Observable } from 'rxjs';

export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  sal: number;
}

@Component({
  selector: 'app-subject-employees',
  imports: [FormsModule,CommonModule],
  templateUrl: './subject-employees.html',
  styleUrl: './subject-employees.css'
})
export class SubjectEmployees {
employee$!: Observable<Employee[]>;
 employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    sal: 0,
  };

  constructor(private employeeService: EmployeeSubject) {}

  ngOnInit() {
    this.employee$ = this.employeeService.employees$;
    this.employeeService.getAllEmployees().subscribe((list: any) => {
      this.employeeService.setEmployees(list);
    });
  }



  addEmployee() {
    this.employeeService
      .addEmployee(this.employee)
      .subscribe((created: any) => {
        const updated = [...this.employeeService.currentEmployees, created];
        this.employeeService.setEmployees(updated);
        this.employee = {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          sal: 0,
        };
      });
  }

  onDelete(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      // const updated = this.employeeService.getAllEmployees();
      const updated = this.employeeService.currentEmployees.filter(
        (e: any) => e.id !== id
      );
      this.employeeService.setEmployees(updated);
    });
  }
}

