import {Route, Routes} from "@angular/router";
import {CategoryHomeComponent} from "./category-home/category-home.component";
import {DetailComponent} from "./detail/detail.component";
export const PRODUCTS_ROUTES: Routes = [
  {
    path: 'products', children: [
    {path: ':categoryName', component: CategoryHomeComponent},
    {path: 'detail/:productId', component: DetailComponent}
  ]
  }
];
