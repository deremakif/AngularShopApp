import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor( 
    private cart: Cart,
    private router: Router) { }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');
  }

}
