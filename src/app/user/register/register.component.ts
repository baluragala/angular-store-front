import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'sf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {};

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  register(user) {
    this.userService.register(user)
      .subscribe(
        user => alert('User registered successfully.'),
        error => alert('User registration failed. Please try again.')
      )
  }

}
