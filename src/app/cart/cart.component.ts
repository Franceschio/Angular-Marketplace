import { Component, DoCheck, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements DoCheck, OnInit {
  @Input() cartShow: any;

  cartItems: any = JSON.parse(localStorage.getItem('cart')!);

  totalToPay: number = 0;

  onCartClick = (): boolean => {
    return (this.cartShow = !this.cartShow);
  };

  onDeleteItem = (id: number, price: number): void => {
    localStorage.setItem(
      'cart',
      JSON.stringify([
        ...this.cartItems.filter((item: { id: number }) => item.id !== id),
      ])
    );
    this.totalToPay = this.totalToPay - price;
    alert('The product has been deleted from your cart.');
  };

  ngDoCheck(): void {
    if (this.cartItems !== localStorage.getItem('cart')) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  ngOnInit(): void {
    this.cartItems.forEach(
      (item: { price: any }) => (this.totalToPay = this.totalToPay + item.price)
    );
  }
}
