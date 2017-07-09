import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'sf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menu: Array<string> = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getCategories()
      .subscribe((categories) => this.menu = categories)
  }

  title = 'Store Front';
}
