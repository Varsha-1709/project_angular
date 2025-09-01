import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { response } from 'express';
import { ProductService} from '../../services/product-service';
import { EmployeeAdd } from '../employee-add/employee-add';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Employees} from '../../interface/employees';

@Component({
  selector: 'app-productsassign',
  imports: [CommonModule,FormsModule],
  templateUrl: './productsassign.html',
  styleUrl: './productsassign.css'
})
export class Productsassign {
  isLoading: boolean=false;
  employeeArr: Employees[]=[];
  constructor(private productService:ProductService){

  }

  ngOnInit(){
    this.fetchEmployees()
  }

  employee:Employees={
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    sal:0
  };

  editEmployee!:Employees;

  fetchEmployees(){
    this.productService.getEmployees().subscribe((response:any)=>{
      this.isLoading=false;
      this.employeeArr=response;
    });
  }

    onDelete(id:number){
      this.productService.deleteEmployee(id).subscribe((response)=>{
        console.log(response);
        this.fetchEmployees();
      });
    }

    addEmployee(){
      if(!this.employee.id){
        this.productService.addEmployee(this.employee).subscribe(()=>{
          this.fetchEmployees();
        });
      }
    }

    onEdit(emp:Employees){
      this.editEmployee={...emp};
      this.employee=this.editEmployee;
      console.log(this.editEmployee);
    }

    onUpdate(){
      this.productService.updateEmployee(this.editEmployee.id,this.editEmployee).subscribe(()=>{
        console.log(`employee updated`);
        this.fetchEmployees();
        this.employee={
          firstName:'',
          lastName:'',
          email:'',
          gender:'',
          sal:0,
        };
      });
    }

  }

    





  // onDelete(id:number){
  //   this.productService.delEmployee(id).subscribe(
  //     ()=>{
  //      this.productService.getEmployees().subscribe((response) => this.employeeArr = response) ;
  //     }
  //   )
  // }

  // productArr: any;
  // product_api_url='https://fakestoreapi.com/products';
  // isLoading:boolean=false;
  // constructor(private httpClient:HttpClient){

  // }
  // fetchProducts(){
  //   this.isLoading=true;
  //  this.httpClient.get(this.product_api_url).subscribe(
  //      (response)=>{
  //       this.isLoading=false;
  //       this.productArr=response;
  //     }
  //   );

  // }

  //   fetchProducts(){
  //   this.isLoading=true;
  //   this.httpClient.put(this.product_api_url).subscribe(
  //     (response)=>{
  //       this.isLoading=false;
  //       this.productArr=response;
  //     }
  //   );

  // }


