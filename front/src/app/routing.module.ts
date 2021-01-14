import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AccueilCompoComponent } from './accueil-compo/accueil-compo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilCompoComponent },
  { path: 'pageproduits', loadChildren:() => import('./modules/catalogue/catalogue.module').then(m=>m.CatalogueModule)},
  { path: 'pageform', loadChildren:() => import('./modules/account/account.module').then(m=>m.AccountModule)},
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
  { path: 'login', loadChildren:() => import('./modules/login/login.module').then(m=>m.LoginModule)},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }