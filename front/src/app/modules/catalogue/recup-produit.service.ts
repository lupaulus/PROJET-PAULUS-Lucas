import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../../models/produit';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecupProduitService {

  constructor(private http: HttpClient)
  {
  }

  getProduits(): Observable<Produit[]>
  {
    return this.http.get<Produit[]>("https://php-shop-paulus.herokuapp.com/api/product");
  }

  

}
