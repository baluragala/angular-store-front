import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-top-rated-products',
  templateUrl: './top-rated-products.component.html',
  styleUrls: ['./top-rated-products.component.css']
})
export class TopRatedProductsComponent implements OnInit {

 @Input() products: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
  }

}
