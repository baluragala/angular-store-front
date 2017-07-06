import {Route, Routes} from "@angular/router";
import {CategoryHomeComponent} from "./category-home/category-home.component";
export const PRODUCTS_ROUTES: Routes = [
  {
    path: 'products', children: [{
    path: ':categoryId', component: CategoryHomeComponent
  }]
  }
];
