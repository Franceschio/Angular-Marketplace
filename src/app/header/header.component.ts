import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dataCont: MainServiceService, public router: Router) {}

  search = new FormControl('');

  hamburgerShow: boolean = false;
  cartShow: boolean = false;

  onHamburgerClick = (): boolean => {
    return (this.hamburgerShow = !this.hamburgerShow);
  };

  onCartClick = (): boolean => {
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
