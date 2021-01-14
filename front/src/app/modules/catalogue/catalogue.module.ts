import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCompoComponent } from './detail-compo/detail-compo.component';
import { ListeProduitCompoComponent } from './liste-produit-compo/liste-produit-compo.component';
import { MoteurRechercheCompoComponent } from './moteur-recherche-compo/moteur-recherche-compo.component';
import { PageproduitComponent } from './pageproduit/pageproduit.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogueRoutingModule } from './catalogue-routing.module';




@NgModule({
  declarations: [
    ListeProduitCompoComponent,
    MoteurRechercheCompoComponent,
    DetailCompoComponent,    
    PageproduitComponent
  ],
  imports: [
    CommonModule,
    Ng5SliderModule,
    FormsModule,
    CatalogueRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CatalogueModule { }
