import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'sf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() menu: [string];

  constructor() {
  }

  ngOnInit() {
  }

}
