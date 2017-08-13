import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'sf-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  cart = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService
      .getCartObservable()
      .subscribe(data => this.cart = this.apiService.cart)
  }

}
