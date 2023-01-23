import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any=[];
  constructor(private services:ProductdetailsService, private addtocat:AddToCartService) { }

  ngOnInit(): void {
    this.products = this.services.ProductData;
  }

  addToCart(item:any){
    this.addtocat.addToCart(item);
  }

}
