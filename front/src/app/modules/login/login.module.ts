import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageloginCompoComponent } from 'src/app/modules/login/pagelogin-compo/pagelogin-compo.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiHttpInterceptor } from 'src/app/apiHttpInterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    PageloginCompoComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
