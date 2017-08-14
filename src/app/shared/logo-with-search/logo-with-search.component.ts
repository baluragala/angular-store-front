import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'sf-logo-with-search',
  templateUrl: './logo-with-search.component.html',
  styleUrls: ['./logo-with-search.component.css']
})
export class LogoWithSearchComponent implements OnInit {

  searchTerm;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['search', this.searchTerm])
  }

}
