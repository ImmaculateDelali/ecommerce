import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductdetailsService } from './productdetails.service';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  
  private cartItems:any[] = [];
  private total: number = 0;
  private cartSubject = new BehaviorSubject({items: this.cartItems, total: this.total});

  constructor(private router:Router) { }
   // methid for adding an item to the cart 
   addToCart(item: any){
    console.log(item)
    
    if(localStorage.getItem("cart")){
      let tmpcart = JSON.parse(localStorage.getItem("cart")!);
      tmpcart.push(item);
      localStorage.setItem("cart",JSON.stringify(tmpcart));
    }else{
      localStorage.setItem("cart",JSON.stringify([item]));
    }
    this.router.navigate(["/cart"]);
  }

// method for removing an item from the cart 
  removeFromCart(index: any){
      let newcart = JSON.parse(localStorage.getItem("cart")!);      
      newcart.splice(index,1);
      localStorage.setItem("cart",JSON.stringify(newcart));
  }



// method for getting the current cart items an d totoal 
static getCart(){
    if(localStorage.getItem("cart")){
      return JSON.parse(localStorage.getItem("cart")!);
    }else{
      return [];
    }
  }

}


