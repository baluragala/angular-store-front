import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CarouselModule} from "ngx-bootstrap";
import {ProductsModule} from "./products/products.module";
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {UserModule} from "./user/user.module";
import {ContactComponent} from './contact/contact.component';
import {ApiService} from "./api.service";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    ProductsModule,
    ProductsModule,
    UserModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    {provide: 'API_ENDPOINT', useValue: 'http://localhost:3000/api'},
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
