import { Component, Input, OnInit, Output } from '@angular/core';
import { ListeProduitCompoComponent } from '../liste-produit-compo/liste-produit-compo.component';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-moteur-recherche-compo',
  templateUrl: './moteur-recherche-compo.component.html',
  styleUrls: ['./moteur-recherche-compo.component.scss']
})
export class MoteurRechercheCompoComponent implements OnInit {

  @Input() recherche: string;
  @Input() listecompo: ListeProduitCompoComponent;

  value: number = 0;
  highValue: number = 20;
  options: Options = {
    floor: 0,
    ceil: 20
  };

  

  constructor() {

   }

  ngOnInit(): void {
  }

  search()
  {
    this.listecompo.search(this.recherche,this.value,this.highValue);
  }
}
