import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements DoCheck {
  @Input() data: any;

  actualCart: any = JSON.parse(localStorage.getItem('cart')!);

  onAddCart = (): void => {
    if (!this.actualCart) {
      localStorage.setItem('cart', JSON.stringify([this.data]));
    } else {
      localStorage.setItem(
        'cart',
        JSON.stringify([
          ...this.actualCart.filter(
            (item: { id: number }) => item.id !== this.data.id
          ),
          this.data,
        ])
      );
    }
    alert('The product has been added to the cart');
    location.reload();
  };

  ngDoCheck(): void {
    if (this.actualCart !== localStorage.getItem('cart')) {
      this.actualCart = JSON.parse(localStorage.getItem('cart')!);
    }
  }
}
