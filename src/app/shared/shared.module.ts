import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {LogoWithSearchComponent} from './logo-with-search/logo-with-search.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {BsDropdownModule} from "ngx-bootstrap";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    LogoWithSearchComponent,
    NavigationComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    LogoWithSearchComponent,
    NavigationComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
