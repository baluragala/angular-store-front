import {Route, Routes} from "@angular/router";
import {CategoryHomeComponent} from "./category-home/category-home.component";
import {DetailComponent} from "./detail/detail.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {AuthorizeGuard} from "../user/authorize.guard";

export const PRODUCTS_ROUTES: Routes = [
    {
      path: 'products', children: [
      {path: ':categoryName', component: CategoryHomeComponent},
      {path: 'detail/:productId', component: DetailComponent},
    ]
    },
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent, canActivate: [AuthorizeGuard]}
  ]
;
