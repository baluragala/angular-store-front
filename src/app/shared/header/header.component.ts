import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'sf-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  cart = [];
  userLoggedIn: boolean;

  constructor(private apiService: ApiService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.apiService
      .getCartObservable()
      .subscribe(data => this.cart = this.apiService.cart);

    this.userService
      .getObservable()
      .subscribe(loggedInStatus => this.userLoggedIn = loggedInStatus)
  }

  logout() {
    this.userService.logout();
  }

}
