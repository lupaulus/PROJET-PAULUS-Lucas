import { Component, Input, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { AppHttpService } from 'src/app/app-http.service';
import { Cart } from 'src/app/models/cart';
import { DelProduit } from '../../../../actions/produit-actions';
import { Produit } from '../../../models/produit';

@Component({
  selector: 'app-cart-compo',
  templateUrl: './cart-compo.component.html',
  styleUrls: ['./cart-compo.component.scss']
})
export class CartCompoComponent implements OnInit {

  listProduits$: Observable<Produit>;
  nbrProduit$: Observable<number>;

  constructor(private store: Store, private api:AppHttpService) {}

  
  ngOnInit(): void {

    this.nbrProduit$ = this.store.select(state => state.listProduits.produits.length);
    this.listProduits$ = this.store.select(state => state.listProduits.produits);
  }

  delProduit(p :Produit)
  {
    this.store.dispatch(new DelProduit(p));
  }

  passOrder()
  {

    this.api.postOrder(new Cart());

  }

}
