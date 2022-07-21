import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './contracts/index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddContractComponent } from './contracts/add-contract/add-contract.component';
import { ShowContractComponent } from './contracts/show-contract/show-contract.component';
import {HttpClientModule} from '@angular/common/http';
import  * as _ from 'lodash';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    AddContractComponent,
    ShowContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
