import { ChangeDetectorRef, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductsService } from './products.service';

interface Product {
  id: number;
  name: string;
  price: number;
  supplier: string;
}
interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'my-app',
  templateUrl: `app.template.html`,
  providers: [ProductsService],
})
export class AppComponent {
  showSummary: boolean = false;
  products$: Observable<Product[]>;
  cartItems: CartItem[];

  constructor(
    private productsProvider: ProductsService,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  onAddToCart(product: Product): void {
    let productInCart = this.cartItems.find((el) => el.product === product);

    if (productInCart) {
      productInCart.quantity++;
    } else {
      const cartItem: CartItem = { product: product, quantity: 1 };
      this.cartItems.push(cartItem);
    }
  }

  onPlaceOrder(): void {
    this.cartItems = [];
    this.showSummary = true;
  }

  onSummaryClose(): void {
    this.showSummary = false;
  }

  private loadProducts(): void {
    this.products$ = this.productsProvider.loadData();
  }
}
