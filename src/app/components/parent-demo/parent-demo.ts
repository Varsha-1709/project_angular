import { Component } from '@angular/core';
import { Child2Demo } from "../child2-demo/child2-demo";
import { Child1Demo } from '../child1-demo/child1-demo';

@Component({
  selector: 'app-parent-demo',
  imports: [Child2Demo,Child1Demo],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css'
})
export class ParentDemo {
  a=10;

}
