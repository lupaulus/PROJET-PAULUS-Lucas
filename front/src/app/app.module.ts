import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module'
import { AppComponent } from './app.component';
import { HeaderCompoComponent } from './header-compo/header-compo.component';
import { FooterCompoComponent } from './footer-compo/footer-compo.component';
import { AccueilCompoComponent } from './accueil-compo/accueil-compo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ProduitState } from '../states/produit-state';
import { UserState } from 'src/states/user-state';
import { ApiHttpInterceptor } from './apiHttpInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompoComponent,
    FooterCompoComponent,
    AccueilCompoComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      ProduitState,
      UserState
    ]
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,    useClass: ApiHttpInterceptor,     multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
