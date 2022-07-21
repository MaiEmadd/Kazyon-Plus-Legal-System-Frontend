import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './contracts/index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import  * as _ from 'lodash';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCxXdIGEx6lpg38EnApo0dEjRIePZCw-lw",
      authDomain: "kazyonlegal.firebaseapp.com",
      databaseURL: "https://kazyonlegal-default-rtdb.firebaseio.com",
      projectId: "kazyonlegal",
      storageBucket: "kazyonlegal.appspot.com",
      messagingSenderId: "564508638586",
      appId: "1:564508638586:web:b2d51febca24e5e0ae6ac3",
      measurementId: "G-68XSP6RCMK"
    }),
    AngularFirestoreModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
