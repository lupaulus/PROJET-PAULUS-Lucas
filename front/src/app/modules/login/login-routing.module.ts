import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageloginCompoComponent } from 'src/app/modules/login/pagelogin-compo/pagelogin-compo.component';

const loginroutes: Routes = [
  { path: '',  component: PageloginCompoComponent},

  

]; // sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forChild(loginroutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }