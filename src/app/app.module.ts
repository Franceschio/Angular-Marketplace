import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DealsComponent } from './deals/deals.component';
import { NewComponent } from './new/new.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    HeroComponent,
    FooterComponent,
    NotFoundComponent,
    DealsComponent,
    NewComponent,
    SearchPageComponent,
    SingleProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
