import { Component, DoCheck, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck, OnInit {
  constructor(public dataCont: MainServiceService, public router: Router) {}

  search = new FormControl('');

  hamburgerShow: boolean = false;
  cartShow: boolean = false;

  cartItems: any = JSON.parse(localStorage.getItem('cart')!);

  totalToPay: number = 0;

  onHamburgerClick = (): boolean => {
    return (this.hamburgerShow = !this.hamburgerShow);
  };

  onCartClick = (): boolean => {
    this.onHamburgerClick();
    return (this.cartShow = !this.cartShow);
  };

  onSearch = (e: Event): void => {
    e.preventDefault();
    this.dataCont.searchCont = this.search.value;
    this.router.url !== '/searchPage'
      ? this.router.navigate(['/searchPage'])
      : null;
    this.search.setValue('');
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

//   other version:

// js

//   searchForm = new FormGroup({
//     search: new FormControl(''),
//   });

//onSearch = (): void => {

//   this.dataCont.searchCont = this.searchForm.value.search;
//   this.router.navigate(['/searchPage']);
// };

//   html:

//   <form class="searchbar" [FormGroup]="searchForm" (ngSubmit)="onSearch()">
//       <input formControlName="search" type="text" placeholder="search..." />
//       <img src="https://img.icons8.com/?size=512&id=132&format=png" />
//     </form>
