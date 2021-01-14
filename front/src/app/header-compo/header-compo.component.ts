import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveUser } from 'src/actions/user-action';
import { AppHttpService } from '../app-http.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header-compo',
  templateUrl: './header-compo.component.html',
  styleUrls: ['./header-compo.component.scss']
})
export class HeaderCompoComponent implements OnInit {

  @Input() nbrProduit$: Observable<number>;
  @Input() user$: Observable<User>;
  

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.nbrProduit$ = this.store.select(state => state.listProduits.produits.length);
    this.user$ = this.store.select<User>(state => state.userInfo.connectUser);
    this.user$.subscribe(val => console.log(val));
  }

  Disconnect () {
    this.user$ = null;
    this.router.navigate(['/']);
    this.store.dispatch(new RemoveUser());
  }

}
