import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DealsComponent } from './deals/deals.component';
import { NewComponent } from './new/new.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/' },
  { path: 'categories/:id', component: CategoriesComponent },
  { path: 'product/:id', component: SingleProductComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'new', component: NewComponent },
  { path: 'searchPage', component: SearchPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
