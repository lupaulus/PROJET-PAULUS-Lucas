import { Injectable } from "@angular/core";
import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProduit, DelProduit } from '../actions/produit-actions';
import { ProduitStateModel } from './produit-state-model';


@State<ProduitStateModel>({
  name: "listProduits",
  defaults: {
    produits: []
  }
})

@Injectable()
export class ProduitState {
  @Selector()
  static getNbProduits(state: ProduitStateModel): number {
    return state.produits.length;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      produits: [...state.produits, payload]
    });
  }

  @Action(DelProduit)
  del(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: DelProduit
  ) {
    const state = getState();
    patchState({
      // supprimer le payload dans Produits
      produits: state.produits.filter(
        item => item.id != payload.id
      )
    });
  }
}
