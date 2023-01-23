import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total:number | undefined;
  cartItems:any;

  constructor(private AddToCartService : AddToCartService) { 
    
  }
  
  ngOnInit(): void {
    this.cartItems = AddToCartService.getCart();
    console.log(this.cartItems);
  }
    
  
   removeFromCart(index:any){
    this.AddToCartService.removeFromCart(index);
    this.cartItems = AddToCartService.getCart();
   }
  }
  
