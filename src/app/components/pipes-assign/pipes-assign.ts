import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe1Pipe } from '../../custom-pipes/pipe1-pipe';
import { Pipe2Pipe } from '../../custom-pipes/pipe2-pipe';
import { Pipe3Pipe } from '../../custom-pipes/pipe3-pipe';
import { Pipe4Pipe } from '../../custom-pipes/pipe4-pipe';
import { Pipe5Pipe } from '../../custom-pipes/pipe5-pipe';

@Component({
  selector: 'app-pipes-assign',
  imports: [FormsModule,Pipe1Pipe,Pipe2Pipe,Pipe3Pipe,Pipe4Pipe],
  templateUrl: './pipes-assign.html',
  styleUrl: './pipes-assign.css'
})
export class PipesAssign {
  numberInput:number=0;
  numberIp:number=0;
  dateofbirth:string='';
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

 // searchtxt:string=""; 

}
