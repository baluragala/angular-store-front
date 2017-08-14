import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'sf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      products => this.allProducts = products)
  }

}
