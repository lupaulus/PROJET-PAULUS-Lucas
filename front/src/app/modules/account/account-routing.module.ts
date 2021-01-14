import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageformComponent } from './pageform/pageform.component';

const routes: Routes = [
  { path: '',  component: PageformComponent }

]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }