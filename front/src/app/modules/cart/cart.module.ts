import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCompoComponent } from './cart-compo/cart-compo.component';

import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartCompoComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
