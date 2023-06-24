import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dataCont: MainServiceService) {}

  data: any;
  prodotti: any;

  prodottiFiltrati: any;
  prezzi: number[] = [20, 50, 100, 300, 500, 1000, 2000];
  brands: string[] = [
    'Apple',
    'Samsung',
    'OPPO',
    'Huawei',
    'Microsoft Surface',
    'Infinix',
    'HP Pavilion',
    'Impression of Acqua Di Gio',
    'Royal_Mirage',
    'Fog Scent Xpressio',
    'Al Munakh',
    'Lord - Al-Rehab',
    "L'Oreal Paris",
    'Hemani Tea',
    'Dermive',
    'ROREC White Rice',
    'Fair & Clear',
    'Saaf & Khaas',
    'Bake Parlor Big',
    'Baking Food Items',
    'fauji',
    'Dry Rose',
    'Boho Decor',
    'Flying Wooden',
    'LED Lights',
    'luxury palace',
    'Golden',
    'Furniture Bed Set',
    'Ratttan Outdoor',
    'Kitchen Shelf',
    'Multi Purpose',
    'AmnaMart',
    'Professional Wear',
    'Soft Cotton',
    'Top Sweater',
    'RED MICKY MOUSE..',
    'Digital Printed',
    'Ghazi Fabric',
    'IELGY',
    'IELGY fashion',
    'Synthetic Leather',
    'Sandals Flip Flops',
    'Maasai Sandals',
    'Arrivals Genuine',
    'Vintage Apparel',
    'FREE FIRE',
    'Vintage Apparel',
    'The Warehouse',
    'Rubber',
    'The Warehouse',
    'Sneakers',
    'Naviforce',
    'SKMEI 9117',
    'Strap Skeleton',
    'Stainless',
    'Eastern Watches',
    'Luxury Digital',
    'Watch Pearls',
    'LouisWill',
    'Bracelet',
    'Steal Frame',
    'Darojay',
    'Copenhagen Luxe',
    'Fashion Jewellery',
    'Cuff Butterfly',
    'Designer Sun Glasses',
    'mastar watch',
    'LouisWill',
    'Car Aux',
    'W1209 DC12V',
    'TC Reusable',
    'Neon LED Light',
    'METRO 70cc Motorcycle - MR70',
    'BRAVE BULL',
    'shock absorber',
    'JIEPOLLY',
    'Xiangle',
    'lightingbrilliance',
    'Ifei Home',
    'DADAWU',
    'Ifei Home',
    'YIOSI',
  ];

  categorie: any;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.dataCont.GET().subscribe((data) => {
      this.data = data;
      this.prodotti = this.data.products;
      this.prodottiFiltrati = this.prodotti;
    });

    this.dataCont.GETcat().subscribe((data) => {
      this.categorie = data;
    });

    localStorage.getItem('cart') ? null : localStorage.setItem('cart', '[]');
  }

  onCatChange = (event: Event): string => {
    if ((<HTMLInputElement>event.target).value === 'All categories') {
      return (this.prodottiFiltrati = this.prodotti);
    } else {
      return (this.prodottiFiltrati = this.prodotti.filter(
        (prod: { category: string }) =>
          prod.category === (<HTMLInputElement>event.target).value
      ));
    }
  };

  onPriceChange = (event: Event): string => {
    if ((<HTMLInputElement>event.target).value === 'all prices') {
      return (this.prodottiFiltrati = this.prodotti);
    } else {
      return (this.prodottiFiltrati = this.prodotti.filter(
        (prod: { price: string }) =>
          parseInt(prod.price) <=
          parseInt((<HTMLInputElement>event.target).value)
      ));
    }
  };

  onBrandChange = (event: Event): string => {
    if ((<HTMLInputElement>event.target).value === 'all brands') {
      return (this.prodottiFiltrati = this.prodotti);
    } else {
      return (this.prodottiFiltrati = this.prodotti.filter(
        (prod: { brand: string }) =>
          prod.brand === (<HTMLInputElement>event.target).value
      ));
    }
  };
}
