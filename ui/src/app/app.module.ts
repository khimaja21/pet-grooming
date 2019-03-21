import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroomingService } from './new-grooming-form/grooming.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewGroomingFormComponent } from './new-grooming-form/new-grooming-form.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { GroomingMenuComponent } from './grooming-menu/grooming-menu.component';
import { MatMenuModule} from '@angular/material/menu';
import {  MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NewGroomingFormComponent,
    CustomerListComponent,
    GroomingMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [GroomingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
