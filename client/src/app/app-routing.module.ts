import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFromComponent } from './components/product-from/product-from.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'product',
    component:ProductListComponent
  },
  {
    path:'product/create',
    component:ProductFromComponent
  },
  {
    path:'product/edit/:id',
    component:ProductFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
