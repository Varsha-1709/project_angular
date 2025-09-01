import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css'
})
export class ModelDrivenForm {
  myForm:any;
  // constructor(){
  //   this.myForm=new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   address:new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pincode: new FormControl('')
  //   })
  //   })
  // }

  constructor(){

  }
  ngOnInit(){
    this.createMyFormUsingFormGroup();
    // this.createMyFormUsingFormBuilder();
  }
  createMyFormUsingFormGroup(){
    this.myForm=new FormGroup({
    firstName: new FormControl('Varsha',[Validators.required,Validators.minLength(5)]),
    lastName: new FormControl('Kandimalla',[Validators.required]),
    email: new FormControl(''),
    address:new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl('')
    })
    });
  }

  submitMyForm(formData:any){
    console.log(formData)
  }

  // createMyFormUsingBuilder(){
  //   this.myForm = this.createMyFormUsingBuilder.group({
  //     firstName:['Varsha',[Validators.required],
  //     lastName: ['Kanddimalla',[Validators.required]],
  //     address: this.formBuilderGroup
  //   ]
  //   })
  // }

}
