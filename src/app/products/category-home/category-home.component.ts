import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'sf-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  category: string;
  products: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) {

    this.activatedRoute.params.subscribe((params) => {
      this.category = params["categoryName"];

    });

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.productService.getProductsByCategory(queryParams.id)
        .subscribe((products) => this.products = products)

    })
  }

  ngOnInit() {

  }

}
