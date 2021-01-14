export class Produit {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;

  constructor(n: string,i:string, d: string, p: number) {
    this.name = n;
    this.image = i;
    this.desc = d;
    this.price = p;
  }
}