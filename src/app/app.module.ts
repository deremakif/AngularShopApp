import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import {RouterModule} from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: '**', redirectTo: "/shop" }
    ]),
    TranslateModule.forRoot({  
      loader: {  
         provide: TranslateLoader,  
         useFactory: httpTranslateLoader,  
         deps: [HttpClient]  
         }  
      }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}

  // AOT compilation support  
  export function httpTranslateLoader(http: HttpClient) {  
    return new TranslateHttpLoader(http);  
}  