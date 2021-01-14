import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cart } from './models/cart';
import { Login } from './models/login';
import { User } from './models/user';


const URI = "https://php-shop-paulus.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private http: HttpClient) { }

  
  public urlApiSignin = URI + "/signin";
  public urlApiAuth = URI + "/login";
  public urlApiOrder = URI + "/api/order";

  httpOptions =
  {
      headers: new HttpHeaders(
        
        { 
          'Content-Type': 'application/json',
        'Access-Control-Request-Method':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Request-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
      }
      )
  }


  public postSignin (value : User )  
  {
    console.log(JSON.stringify(value));
      return this.http.post<User>(this.urlApiSignin, JSON.stringify(value), this.httpOptions);
  }

  public postLogin (login : Login)
  {
      return this.http.post<User>(this.urlApiAuth,JSON.stringify(login),this.httpOptions);
  }

  public postOrder (order : Cart)
  {
    return this.http.post(this.urlApiOrder,JSON.stringify(order),this.httpOptions);
  }
}

