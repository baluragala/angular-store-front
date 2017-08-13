import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import {USER_ROUTES} from "./user.routes";
import {RegisterComponent} from './register/register.component';
import {UserService} from "./user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthorizeGuard} from "./authorize.guard";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [UserService, AuthorizeGuard]
})
export class UserModule {
}
