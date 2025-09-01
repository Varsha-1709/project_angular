import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, signal } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-signal-assign',
  imports: [CommonModule],
  templateUrl: './signal-assign.html',
  styleUrl: './signal-assign.css'
})
export class SignalAssign {

  todo = signal([
     { id: 1, title: 'Task 1', isCompleted: false },
    { id: 2, title: 'Task 2', isCompleted: true },
    { id: 3, title: 'Task 3', isCompleted: false },
    { id: 4, title: 'Task 4', isCompleted: true },
  ]); //todo list

  userId = signal(1);  //userId will be starting from 1
  userData: any;
  userDetailsEffect = effect(()=>{
    const id = this.userId();
    this.fetchUserDetails(id);
  }); //effect will be automatically calling fetchUserDetails wheneve Id changes

  destroyEffect(){
    this.userDetailsEffect.destroy();
  } //stop the effect manually
 
  constructor(private httpClient:HttpClient){}
  fetchUserDetails(id:number){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users/${id}')
    .subscribe((response)=>{
      this.userData=response;
    }); //on subscribing we will be getting the api response to userdata
  }
 
  incrementUserId(){
    this.userId.update((val)=>val+1);
  } //increments the userId, so the effect will run again, so new API call
   
  
 
  completed = computed(()=>{
    return this.todo().filter((t:any)=>t.isCompleted);
  }); //list of completed tasks

  remaining = computed(()=>{
    return this.todo().filter((t)=>!t.isCompleted);
  }); //list of remaining tasks

 toggle(id:any){
  this.todo.update((list)=>list.map((t)=>(t.id===id?{...t,isCompleted: !t.isCompleted}:t))
);
 }

}
