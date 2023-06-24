import { Component, DoCheck, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit, DoCheck {
  constructor(
    private dataCont: MainServiceService,
    private router: ActivatedRoute
  ) {}
  id: any = this.router.snapshot.paramMap.get('id');
  prodData: any;
  thumbImage: any;
  actualThumb: string = '';
  discount: number = 0;

  actualCart: any = JSON.parse(localStorage.getItem('cart')!);

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id = this.router.snapshot.paramMap.get('id');
    this.dataCont.GETprod(this.id).subscribe((data) => {
      this.prodData = data;
      this.discount = Math.round(
        this.prodData.price -
          (this.prodData.price * this.prodData.discountPercentage) / 100
      );
    });
  }

  onAddCart = (): void => {
    if (!this.actualCart) {
      localStorage.setItem('cart', JSON.stringify([this.prodData]));
    } else {
      localStorage.setItem(
        'cart',
        JSON.stringify([
          ...this.actualCart.filter(
            (item: { id: number }) => item.id !== this.prodData.id
          ),
          this.prodData,
        ])
      );
    }
    alert('The product has been added to the cart.');
    location.reload();
  };

  ngDoCheck(): void {
    if (!this.thumbImage) {
      this.thumbImage = this.prodData.thumbnail;
    }

    if (this.actualCart !== localStorage.getItem('cart')) {
      this.actualCart = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  setImg = (value: string): string => {
    this.actualThumb = value;
    return (this.thumbImage = value);
  };
}
