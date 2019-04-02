import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewGroomingFormComponent } from './new-grooming-form/new-grooming-form.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { GroomingMenuComponent } from './grooming-menu/grooming-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addCustomer', component: NewGroomingFormComponent},
  { path: 'editCustomer/:_id', component: NewGroomingFormComponent},
  { path: 'listCustomers', component: CustomerListComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewGroomingFormComponent,
    CustomerListComponent,
    GroomingMenuComponent,
    NotFoundComponent,
    HomeComponent
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
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
