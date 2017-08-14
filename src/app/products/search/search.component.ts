import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'sf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedProducts = [];

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let products = this.productService
          .getAllProducts()
          .map(products => products.filter(p => p.name.includes(params.get('searchTerm'))))
          .subscribe(products => {
            this.searchedProducts = products
          })

      }
    )
  }

}
