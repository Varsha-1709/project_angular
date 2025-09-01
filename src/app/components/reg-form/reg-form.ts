import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { first } from 'rxjs';

@Component({
  selector: 'app-reg-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './reg-form.html',
  styleUrl: './reg-form.css'
})
export class RegForm {
  user={
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    hobbies:[] as string[],
    country:'',
    address:''
  };

  hobbiesList:string[]=['Reading','Sports','Music','Traveling'];
  countries=['USA','India','UK','Canada']

  onHobbyChange(event:any){
    const hobby = event.target.value; //gets hobby name from checkbox and stores it in hobby
    if(event.target.checked){
      this.user.hobbies.push(hobby); //adds hobby to user.hobbies is it's checked
    }else{ //if unchecked we'll remove it 
      const index = this.user.hobbies.indexOf(hobby); //finds index of hobby in array
      if(index>=0) this.user.hobbies.splice(index,1); //removes that using splice
    }
  }

}
