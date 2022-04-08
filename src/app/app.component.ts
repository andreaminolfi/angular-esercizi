import { Component, VERSION } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  product: Product = {
    label: 'Nutella',
    cost: 5,
    qty: 1,
  };

  dec(): void {
    this.product.qty--;
  }

  inc(): void {
    this.product.qty++;
  }
}
