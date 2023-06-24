import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  constructor(public dataCont: MainServiceService) {}

  data: any;
  deals: any;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.dataCont.GET().subscribe((data) => {
      this.data = data;
      this.deals = this.data.products.filter(
        (prod: { discountPercentage: string }) =>
          parseInt(prod.discountPercentage) >= 15
      );
    });
  }
}
