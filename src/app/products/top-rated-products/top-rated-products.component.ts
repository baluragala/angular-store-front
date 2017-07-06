import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sf-top-rated-products',
  templateUrl: './top-rated-products.component.html',
  styleUrls: ['./top-rated-products.component.css']
})
export class TopRatedProductsComponent implements OnInit {

  products1: Array<any> = [];
  products2: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
    this.products1 = [
      {
        name: 'Oranges',
        price: 2.99,
        offerPrice: 1.99
      },
      {
        name: 'Apples',
        price: 2.99,
        offerPrice: 1.99
      },
      {
        name: 'Peaches',
        price: 2.99,
        offerPrice: 1.99
      },
    ];
    this.products2 = [

      {
        name: 'Chikoo',
        price: 2.99,
        offerPrice: 1.99
      },
      {
        name: 'Banana',
        price: 2.99,
        offerPrice: 1.99
      },
      {
        name: 'Avacado',
        price: 2.99,
        offerPrice: 1.99
      }
    ]
  }

}
