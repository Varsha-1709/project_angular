import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../interface/employees';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product_api_url='http://localhost:3000/employees';
  constructor(private httpClient:HttpClient){

  }

  getEmployees(){
    return this.httpClient.get<Employees[]>(this.product_api_url);
  }

  

  addEmployee(empToAdd:Object){
    return this.httpClient.post<Employees[]>(this.product_api_url,empToAdd);
  }
  
  
  updateEmployee(empId:any,dataToUpdate:Object){
     return this.httpClient.patch<Employees[]>(`${this.product_api_url}/${empId}`,dataToUpdate);
   }

   
   deleteEmployee(empId:any){
    return this.httpClient.delete<void>(`${this.product_api_url}/${empId}`);
   }
  
  
}
