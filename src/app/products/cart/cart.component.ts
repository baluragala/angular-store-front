import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";

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

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.cart = this.apiService.cart;
  }

}
