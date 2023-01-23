
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  ProductData = [
    {
        id:1,
        ProductName:"Loose Wave Bob Brazilian",
        Productinfo:"Elva Hair Pre Plucked Loose Wave Bob Brazilian Remy Hair 13x6 Lace Front Wigs 150 Density Swiss Lace",
        ProductPrice:600,
        Productimg:"https://i.pinimg.com/474x/56/8f/97/568f97c5af878d75db69919a6b5a1056.jpg" 
    },
    {
      id:2,
      ProductName:"Curly Bangs",
      Productinfo:"Model Length 12 Inches Lace Area 2.75*1 Inches Minimalist Lace Hair Material 100% Virgin Hair ",
      ProductPrice:300,
      Productimg:"https://i.pinimg.com/736x/19/a1/dd/19a1ddac67369112f26707b464440148.jpg"
  },
    
  {
    id:3,
    ProductName:"Kinky curly bob",
    Productinfo:"Length10-14 inchesHair Material100% virgin hair Density180%Hair Colornatural blackHairlinepre-plucked",
    ProductPrice:800,
    Productimg:"https://i.pinimg.com/564x/6a/a0/59/6aa05969113af837f4048734a7bb1622.jpg"
  },
  {
    id:4,
    ProductName:"Ombre brown curly ",
    Productinfo:"closure wig Cap,glueless with adjustable straps and clips.Knotting Bleached and hand-plucked. Remy human hair Density 180%",
    ProductPrice:500,
    Productimg:"https://i.pinimg.com/564x/75/82/17/75821750c6d42bdb37f1b1154040e445.jpg"
    
  },
  {
    id:5,
    ProductName:"Short bob wavy hair ",
    Productinfo:"Quality Management It can last more than 12 months with proper care Hair Advantage No Shedding, Tangle Free, Soft.",
    ProductPrice:520,
    Productimg:"https://i.pinimg.com/564x/07/33/28/073328106fefef7b9150a815c3b653a1.jpg" 
  },
  {
    id:6,
    ProductName:"Highlighted body wave wig",
    Productinfo:"Remy Hair Material: Brazilian Human Hair Suitable Dying Colors: Darker Color Only Can Be Permed",
    ProductPrice:700,
    Productimg:"https://i.pinimg.com/564x/2b/63/87/2b6387d7a7360b7b7226878d9e40d0f2.jpg" 
  },
  {
    id:7,
    ProductName:"Bob bone straight",
    Productinfo:"Virgin Human Hair. pre plucked Lace closure Straight Bob wig StraightNo tangle,no shedding Can be bleached or dyed",
    ProductPrice:560,
    Productimg:"https://i.pinimg.com/736x/82/2f/a1/822fa1d84ea430906bbd5deb0fe7153d.jpg" 
  },
  
  {
    id:8,
    ProductName:"Bob 14inches wig",
    Productinfo:"Natural color Ready to ship Fit all head Elastic band to secure",
    ProductPrice:450,
    Productimg:"https://i.pinimg.com/564x/69/8f/aa/698faa43f48e6e077e73955800f735bf.jpg" 
  },
    
    
  ];

  getData(){
    return this.ProductData;
  }

  constructor(
  ) { }
}
