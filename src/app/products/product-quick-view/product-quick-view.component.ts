import {Component, OnInit, Input} from '@angular/core';
import {ProductService} from "../../product.service";

@Component({
  selector: 'sf-product-quick-view',
  templateUrl: './product-quick-view.component.html',
  styleUrls: ['./product-quick-view.component.css']
})
export class ProductQuickViewComponent implements OnInit {

  @Input() product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  addToCart(product) {
    this.productService.addToCart(product);
  }

}
