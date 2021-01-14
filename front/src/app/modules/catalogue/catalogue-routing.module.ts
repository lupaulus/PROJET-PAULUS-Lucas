import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageproduitComponent } from './pageproduit/pageproduit.component';
import { DetailCompoComponent } from './detail-compo/detail-compo.component';

const catalogueroutes: Routes = [
  { path: '',  component: PageproduitComponent},
  { path: 'detail/:id', component: DetailCompoComponent}

  

]; // sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forChild(catalogueroutes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }