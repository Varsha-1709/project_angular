import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {

  user =     {
  "firstName": "varsha",
  "lastName": "Kandimalla",
  "email": "varshareddykandimalla@gmail.com",
  "address": {
    "city": "Fairfax",
    "state": "VA",
    "pincode": "22030"
  }
}
  submitMyForm(formDate:any){
    console.log(formDate)

  }

}
