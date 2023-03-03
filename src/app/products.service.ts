import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem, Product } from './app.component';

@Injectable()
export class ProductsService implements OnInit {
  data: Product[] = [
    { id: 1, name: 'Product 1', price: 10.99, supplier: 'Supplier A' },
    { id: 2, name: 'Product 2', price: 20.99, supplier: 'Supplier B' },
    { id: 3, name: 'Product 3', price: 30.99, supplier: 'Supplier C' },
    { id: 4, name: 'Product 4', price: 40.99, supplier: 'Supplier D' },
    { id: 5, name: 'Product 5', price: 50.99, supplier: 'Supplier D' },
  ];

  data$: Observable<Product[]> = of(this.data);

  ngOnInit(): void {}

  loadData(): Observable<Product[]> {
    return this.data$;
  }

  orderProducts(items: CartItem[], quantity): void {
    console.log('Placing order for ' + quantity + ' items...');
    setTimeout(() => {
      console.log('Done.');
    }, 1000);
  }
}
