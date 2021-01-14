import { Injectable} from '@angular/core';
import {  HttpEvent,  HttpErrorResponse,   HttpInterceptor,    HttpHandler,     HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable } from 'rxjs';
import { tap} from 'rxjs/operators';
import { of} from "rxjs";
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { Actions, ofActionDispatched } from '@ngxs/store';
import { Jwt } from './models/jwt';
import { AddToken, RemoveUser } from 'src/actions/user-action';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

jwtToken : String = "";

constructor( private router: Router, private store :Store, private actions$: Actions) { 
  this.actions$.pipe(ofActionDispatched(AddToken)).subscribe(({ token }) => 
  { 
    this.jwtToken = token.token;
    console.log ("jwtToken modifié : " + this.jwtToken);
  } );
}
 
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
  
  if (this.jwtToken != "") {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${this.jwtToken}` }});
  }
 
  

  return next.handle(req).pipe(tap(
      (evt : HttpEvent<any>)  => {
        if (evt instanceof HttpResponse) {
          let tab :  Array<String> ;                                                                                                                                                                                                                                                                                                                                
          let enteteAuthorization =  evt.headers.get("Authorization");
          if (enteteAuthorization != null ) {
            tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
            if (tab.length  > 1) {
              this.jwtToken = tab [1];
              this.store.dispatch(new AddToken(new Jwt(this.jwtToken)));
            }
            console.log ("Bearer : " + this.jwtToken);
          }
      }
 
    }, 
    (error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.store.dispatch(new RemoveUser());
            console.log(`Erreur 401`);
            this.router.navigate(['/']);
            break;
      }
      return of(null);
    }
    ));  
  }
}