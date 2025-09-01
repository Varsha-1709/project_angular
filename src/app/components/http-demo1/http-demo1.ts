import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css'
})
export class HttpDemo1 {

  user_api_url= 'https://jsonplaceholder.typicode.com/users'; //this is api
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(){
    this.fetchUsersJavascript();
    this.fetchUsersAngular();
  //  this.httpClientWithHeaders();
  
  }

  fetchUsersJavascript(){
    //fetch() return promise
    fetch(this.user_api_url).then(
      (response)=>{
        //success and error handler
        response.json().then(
          (finalResponse)=>{
            console.log(finalResponse)
          }
        )

      },
      (error)=>{
        console.log(error);
      }
    )
  }

  fetchUsersAngular(){
    //get() returns observable
    //observable is similar to promise whose value is not kniwn
    //but will be available in future
    //to read data from observable, subscribe()
    //this.httpClient.get(this.user_api_url).subscribe(
     // (response)=>{console.log(response)},
     // (error)=>{console.log(error)},
     // ()=>{console.log('all received')}
   // );

   // this.httpClient.get(this.user_api_url).subscribe({
     // next:(response)=>console.log(response),
     // error:(error)=>console.log(error),
     // complete:()=>console.log('Completed..')
   // });
  }

  httpClientWithHeaders(){
    this.httpClient.get(this.user_api_url,{observe:'response'}).subscribe(response=>{
      console.log(response)
    });
  }

}
