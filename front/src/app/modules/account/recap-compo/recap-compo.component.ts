import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-recap-compo',
  templateUrl: './recap-compo.component.html',
  styleUrls: ['./recap-compo.component.scss']
})
  
export class RecapCompoComponent implements OnInit {

  public civility: string;
  public firstname:string;
  public lastname:string;
  public address:string;
  public zipcode:string;
  public tel: string;
  public city: string;
  public mail: string;
  public country: string;
  public login: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {

  }

}
