import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'sf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]

    })
  }

  login() {
    let {email, password} = this.loginForm.value;
    this.userService.login(email, password)
      .subscribe(
        success => {
          this.router.navigate(['/cart']);
          this.userService.loggedIn = true;
        },
        error => {
          alert('login failed. Please check credentials');
          this.userService.loggedIn = false;

        }
      )

  }

}
