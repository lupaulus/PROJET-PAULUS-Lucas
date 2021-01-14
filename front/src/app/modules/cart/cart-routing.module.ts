import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CartCompoComponent } from './cart-compo/cart-compo.component';

const routes: Routes = [
  { path: '',  component: CartCompoComponent },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }