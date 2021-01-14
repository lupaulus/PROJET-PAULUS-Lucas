import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { User } from '../../../models/user';
import { Login } from '../../../models/login';
import { AppHttpService } from '../../../app-http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AddToken, AddUser } from 'src/actions/user-action';
import { Jwt } from '../../../models/jwt';


@Component({
  selector: 'app-pagelogin-compo',
  templateUrl: './pagelogin-compo.component.html',
  styleUrls: ['./pagelogin-compo.component.scss']
})
export class PageloginCompoComponent implements OnInit {

  constructor(private api :AppHttpService ,
    private router: Router,private store : Store) { 
      this.error$ = new BehaviorSubject<boolean>(false);
      this.user$ = new BehaviorSubject<User>(null);
    }

  login: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  user$ : BehaviorSubject<User>;
  subscription: Subscription = null;
  errorMessage : string = "Error";
  error$ : BehaviorSubject<boolean>;
  
  
  ngOnInit(): void
  {
    
  }

  onSubmit(): void 
  {
    var u = <Login>(
      {
        username: this.login.value,
        password: this.password.value
      });
    this.Connect(u);

  }

  Connect (login : Login) 
  {
    if (this.subscription != null) 
    {
      console.log ("unsubsribe");
      this.subscription.unsubscribe ()  
    }

    this.subscription = this.api.postLogin(login).subscribe(
      res => 
      {
        this.user$.next(res);
        this.store.dispatch(new AddUser(res));
        // changement d'onglet
        setTimeout(()=>{ this.router.navigate(["/"]); },3000 );
      },
      err => this.handleErrorsLogin(err)
    );
  }


  public  handleErrorsLogin(err: HttpErrorResponse) 
  {
      console.log(err.status)
      if(err.status == 400)
      {
          this.error$.next(true);
          this.errorMessage = err.error['error'];
      }
  }



}
