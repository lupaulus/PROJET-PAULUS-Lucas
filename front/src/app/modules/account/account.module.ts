import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageformComponent } from './pageform/pageform.component'; 
import { FormCompoComponent } from './form-compo/form-compo.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { RecapCompoComponent } from './recap-compo/recap-compo.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageformComponent,
    FormCompoComponent,
    RecapCompoComponent,
    PhoneNumberPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
  ]
})
export class AccountModule { }
