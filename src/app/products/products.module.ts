import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopRatedProductsComponent} from './top-rated-products/top-rated-products.component';
import {TopRatedProductQuickViewComponent} from './top-rated-product-quick-view/top-rated-product-quick-view.component';
import {CategoryHomeComponent} from './category-home/category-home.component';
import {RouterModule} from "@angular/router";
import {PRODUCTS_ROUTES} from "./products.routes";
import { DiscountPipe } from './discount.pipe';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCTS_ROUTES)
  ],
  declarations: [
    TopRatedProductsComponent,
    TopRatedProductQuickViewComponent,
    CategoryHomeComponent,
    DiscountPipe,
    DetailComponent
  ],
  exports: [TopRatedProductsComponent]
})
export class ProductsModule {
}
