import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";

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

  constructor(private apiService: ApiService, private  router: Router) {
  }

  ngOnInit() {
    this.cart = this.apiService.cart;
  }

  checkout() {
    this.router.navigate(['/checkout'])
  }

}
