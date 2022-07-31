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
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import  * as _ from 'lodash';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UploadComponent } from './contracts/upload/upload.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    AddContractComponent,
    ShowContractComponent,
    ErrorPageComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    ClickOutsideModule,
    HttpClientModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
