import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor(private https: HttpClient) {}

  GET = () => {
    return this.https.get('https://dummyjson.com/products?limit=100');
  };

  GETcat = () => {
    return this.https.get('https://dummyjson.com/products/categories');
  };

  GETprod = (id: any) => {
    return this.https.get(`https://dummyjson.com/products/${id}`);
  };

  searchActive: boolean = false;

  searchCont: any;
}
