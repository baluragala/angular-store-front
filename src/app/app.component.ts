import {Component, OnInit} from '@angular/core';
import {ProductService} from "./products/product.service";


@Component({
  selector: 'sf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menu: Array<string> = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getCategories()
      .subscribe((categories) => this.menu = categories)
  }

  title = 'Store Front';
}
