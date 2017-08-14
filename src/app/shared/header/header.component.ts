import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";
import {ProductService} from "../../product.service";

@Component({
  selector: 'sf-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  cart = [];
  userLoggedIn: boolean;

  constructor(private productService: ProductService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.productService
      .getCartObservable()
      .subscribe(data => this.cart = this.productService.cart);

    this.userService
      .getObservable()
      .subscribe(loggedInStatus => this.userLoggedIn = loggedInStatus)
  }

  logout() {
    this.userService.logout();
  }

}
