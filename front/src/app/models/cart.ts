import { Produit } from "./produit";

export class Cart{
  
  id: number;
  listeProduit: Produit[];
  
  constructor() {
  }

  public addProduit(prd: Produit)
  {
    this.listeProduit.push(prd);
  }
}