import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  constructor(public dataCont: MainServiceService) {}

  data: any;
  newProds: any;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.dataCont.GET().subscribe((data) => {
      this.data = data;
      this.newProds = this.data.products.filter(
        (prod: { stock: string }) => parseInt(prod.stock) <= 40
      );
    });
  }
}
