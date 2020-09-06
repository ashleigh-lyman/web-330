/*
  Title: app.module.ts
  Author: Ashleigh Lyman
  Date: 06 September 2020
  Description: App.module.ts page. Controls imports for application
 */


import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdersComponent } from "./orders/orders.component";
import { HomeComponent } from "./home/home.component";
import { InvoiceComponent } from "./invoice/invoice.component";


import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HomeComponent,
    InvoiceComponent,
    HeaderComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InvoiceComponent]
})
export class AppModule {}


//End of app.module.ts page
