import {Component, OnInit, Input} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'sf-top-rated-product-quick-view',
  templateUrl: './top-rated-product-quick-view.component.html',
  styleUrls: ['./top-rated-product-quick-view.component.css']
})
export class TopRatedProductQuickViewComponent implements OnInit {

  @Input() product;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  addToCart(product) {
    this.apiService.addToCart(product);
  }

}
