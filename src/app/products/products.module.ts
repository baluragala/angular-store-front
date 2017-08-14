import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopRatedProductsComponent} from './top-rated-products/top-rated-products.component';
import {ProductQuickViewComponent} from './product-quick-view/product-quick-view.component';
import {CategoryHomeComponent} from './category-home/category-home.component';
import {RouterModule} from "@angular/router";
import {PRODUCTS_ROUTES} from "./products.routes";
import {DiscountPipe} from './discount.pipe';
import {DetailComponent} from './detail/detail.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ProductService} from "../product.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCTS_ROUTES)
  ],
  declarations: [
    TopRatedProductsComponent,
    ProductQuickViewComponent,
    CategoryHomeComponent,
    DiscountPipe,
    DetailComponent,
    CartComponent,
    CheckoutComponent
  ],

  providers: [ProductService],
  exports: [TopRatedProductsComponent]
})
export class ProductsModule {
}
