import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from '../../../models/produit';
import { RecupProduitService } from '../recup-produit.service';
import {ListeProduitCompoComponent } from '../liste-produit-compo/liste-produit-compo.component'

@Component({
  selector: 'app-detail-compo',
  templateUrl: './detail-compo.component.html',
  styleUrls: ['./detail-compo.component.scss']
})
export class DetailCompoComponent implements OnInit {

  id: number; 
  item : Produit;
  produits : Produit[];

  constructor( private api : RecupProduitService,private route: ActivatedRoute, ) { }

  
  ngOnInit(): void {
    this.api.getProduits().subscribe((v) => 
    {
      this.produits = v;
      this.id = this.route.snapshot.params.id;
      this.item = this.produits.find(value => value.id == this.id)
    });
    
  }

}
