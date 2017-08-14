import {Component, OnInit, Input} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'sf-product-quick-view',
  templateUrl: './product-quick-view.component.html',
  styleUrls: ['./product-quick-view.component.css']
})
export class ProductQuickViewComponent implements OnInit {

  @Input() product;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  addToCart(product) {
    this.apiService.addToCart(product);
  }

}
