import { Component, Input, OnInit, Output } from '@angular/core';
import { RecupProduitService } from '../recup-produit.service';    
import { Subscription } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Produit } from '../../../models/produit';
import { Store } from '@ngxs/store';
import { AddProduit } from '../../../../actions/produit-actions';

@Component({
  selector: 'app-liste-produit-compo',
  templateUrl: './liste-produit-compo.component.html',
  styleUrls: ['./liste-produit-compo.component.scss']
})
  
export class ListeProduitCompoComponent implements OnInit {

   produits: Produit[];
  sub: Subscription;

  constructor(private api: RecupProduitService, private store: Store) { }

  ngOnInit(): void {
    this.sub = this.api.getProduits().subscribe(item => this.produits = item );
  }

  search(value: string, minvalue: number, highvalue: number) {
    this.api.getProduits().pipe(
      map(
        (articles: Produit[]) => articles.filter(
          (article: Produit) => value == undefined ? minvalue <= article.price && highvalue >= article.price : article.name.toLowerCase().includes(value.toLowerCase())
            && (minvalue <= article.price && highvalue >= article.price)
        )
      )
    ).subscribe(
      (articles: Produit[]) => {
        this.produits = articles;
      }
    );


    
  }

  onClick(id : number) : void
  {
    this.addProduit(this.findProduitById(id))
  }

  addProduit(p : Produit ) {
    this.store.dispatch(new AddProduit(p));
  }

  findProduitById(id: number): Produit {
    return this.produits.find((value) => value.id == id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
