import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './contracts/index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import { LawsuitComponent } from './lawsuit/lawsuit.component';
import { Case1Component } from './case1/case1.component';
import { ProcurationComponent } from './procuration/procuration.component';
import { Procuration1Component } from './procuration1/procuration1.component';
import { Case2Component } from './case2/case2.component';
import { Case3Component } from './case3/case3.component';
import { Procuration3Component } from './procuration3/procuration3.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SessionComponent } from './session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LawsuitComponent,
    Case1Component,
    ProcurationComponent,
    Procuration1Component,
    Case2Component,
    Case3Component,
    Procuration3Component,
    SessionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
