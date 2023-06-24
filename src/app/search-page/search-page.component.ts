import { Component, DoCheck } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements DoCheck {
  constructor(public dataCont: MainServiceService) {}

  searchedProd: any[] = [];
  data: any = '';

  actualSearch: string = '';

  ngDoCheck(): void {
    window.scrollTo(0, 0);
    if (this.actualSearch !== this.dataCont.searchCont) {
      this.dataCont.GET().subscribe((data) => {
        this.data = data;
        this.actualSearch = this.dataCont.searchCont;
        this.dataCont.searchCont
          ? (this.searchedProd = this.data.products.filter(
              (prod: { title: string }) =>
                prod.title
                  .toLowerCase()
                  .includes(this.dataCont.searchCont.toLowerCase())
            ))
          : (this.searchedProd = []);
      });
    }
  }
}
