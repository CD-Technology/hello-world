import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CartItem } from '../app.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'cart',
  styles: [
    `
    a:not([href]) {
      cursor: pointer;
      color: blue;
      font-size: 0.8em;
    }
  `,
  ],
  templateUrl: './cart.template.html',
})
export class CartComponent {
  @Input('cart') cartItems: CartItem[];
  @Output('place-order') placeOrderEvent: EventEmitter<CartItem[]> = new EventEmitter();
  total: number = 0;
  amountOfItems: number = 0;
  showCart: boolean = false;
  cartStatus: 'Show' | 'Hide' = 'Show';

  constructor(private productsService: ProductsService) {}

  ngOnChanges(): void {
    this.updateTotal();
    this.updateAmountOfItems();
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
    this.cartStatus = this.showCart ? 'Hide' : 'Show';
  }

  onPlaceOrder(): void {
    this.productsService.orderProducts(this.cartItems, this.amountOfItems);
    this.clearCart();
  }

  clearCart(): void {
    this.total = 0;
    this.amountOfItems = 0;
    this.cartItems = [];
  }

  private updateTotal(): void {
    this.total = this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  private updateAmountOfItems(): void {
    this.amountOfItems = this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
