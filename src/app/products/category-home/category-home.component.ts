import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../api.service";

@Component({
  selector: 'sf-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  category: string;
  products: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService) {

    this.activatedRoute.params.subscribe((params) => {
      this.category = params["categoryName"];

    });

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.apiService.getProductsByCategory(queryParams.id)
        .subscribe((products) => this.products = products)

    })
  }

  ngOnInit() {

  }

}
