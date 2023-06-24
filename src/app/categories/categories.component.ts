import { Component, DoCheck } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements DoCheck {
  constructor(
    public dataCont: MainServiceService,
    public router: ActivatedRoute
  ) {}

  allData: any;
  allProd: any;

  id: any;

  getCategory = (param: any): void =>
    this.allProd.filter((prod: { category: any }) => prod.category === param);

  ngDoCheck(): void {
    if (this.id !== this.router.snapshot.paramMap.get('id')) {
      window.scrollTo(0, 0);
      this.id = this.router.snapshot.paramMap.get('id');
      this.dataCont.GET().subscribe((data) => {
        this.allData = data;
        this.allProd = this.allData.products.filter(
          (prod: { category: any }) =>
            prod.category === this.router.snapshot.paramMap.get('id')
        );
      });
    }
  }
}
