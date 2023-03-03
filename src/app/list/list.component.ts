import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app.component';

@Component({
  selector: 'list',
  templateUrl: `./list.template.html`,
})
export class ListComponent {
  @Input() data: Observable<Product[]>;
  @Output('add-to-cart') onAddToCartEvent: EventEmitter<Product> = new EventEmitter();
 
  addToCart(item: Product): void {
    this.onAddToCartEvent.emit(item);
  }
}
