import { Component, OnInit } from '@angular/core';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any=[];
  constructor(private services:ProductdetailsService) { }

  ngOnInit(): void {
    this.products = this.services.ProductData;
  }

}
