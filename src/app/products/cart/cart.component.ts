import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../product.service";

@Component({
  selector: 'sf-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart;
  private _totalCartPrice;

  get totalCartPrice() {
    let total = 0;
    this.cart.forEach((p) => total += p.price);
    return total;
  }

  constructor(private productService: ProductService, private  router: Router) {
  }

  ngOnInit() {
    this.cart = this.productService.cart;
  }

  checkout() {
    this.router.navigate(['/checkout'])
  }

}
