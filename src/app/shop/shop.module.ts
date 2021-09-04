import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// localhost:4200/shop, cart veya order routing

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: httpTranslateLoader,
            deps: [HttpClient]
        }
    })],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent,],
    exports: [ShopComponent, CartDetailComponent, CheckoutComponent,]

})

export class ShopModule { }

// AOT compilation support  
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
