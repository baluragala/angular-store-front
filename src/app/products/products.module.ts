import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopRatedProductsComponent} from './top-rated-products/top-rated-products.component';
import { TopRatedProductQuickViewComponent } from './top-rated-product-quick-view/top-rated-product-quick-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopRatedProductsComponent, TopRatedProductQuickViewComponent],
  exports: [TopRatedProductsComponent]
})
export class ProductsModule {
}
