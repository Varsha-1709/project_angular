import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css'
})
export class CommentList {
  comments_api_url='https://jsonplaceholder.typicode.com/comments';
  commentsArr: any=[];

  constructor(private httpClient:HttpClient){

  }
    ngOnInit(){
      this.fetchComments();
    }

    fetchComments(){
      this.httpClient.get(this.comments_api_url).subscribe((response:any)=>{
        console.log()
      })
    }

}
