import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {SiteModule} from './site/site.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule.forRoot(),
    FormsModule,
    AuthModule.forRoot(),
    SiteModule,
    SharedModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
