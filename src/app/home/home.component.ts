import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'sf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getAllProducts().subscribe(
      products => this.allProducts = products)
  }

}
