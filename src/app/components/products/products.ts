import { Component } from '@angular/core';
import product from './productdata';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [NgxPaginationModule,FontAwesomeModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productsArr=product;
  p:any;
  faStar=faStar;
  searchText: string='';
  filterData(){
    this.productsArr=product.filter(prod=>{
      return prod.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  sortByPriceAsc(){
    this.productsArr.sort((p1,p2)=>p1.price-p2.price);
  } 
   sortByPriceDesc() {
    this.productsArr.sort((p1, p2) => p2.price - p1.price);
  }

}
