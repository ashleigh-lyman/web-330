
/*
  Title: invoice.component.ts
  Author: Ashleigh Lyman
  Date: 06 September 2020
  Description: Controls invoice component logic. Results for the orders page
 */

import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { OrdersComponent } from "../orders/orders.component";


@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})


export class InvoiceComponent implements OnInit {

//This imports the values from public service list from orders.component.ts
  @Input() public service;

//Constructor function of InvoiceComponent Class that contains declared variables. Uses Material
//dialog with OrdersComponent as dialog variable
  constructor(private dialog: MatDialogRef<OrdersComponent>) {}


//Displays new instance of service list when "add to order" is clicked
  ngOnInit() {
    console.log(this.service);
  }

//Action used to close button
  confirm() {
    this.dialog.close();
    location.reload();
  }


}

//End of Invoice Component logic page
