
/*
  Title: orders.component.ts
  Author: Ashleigh Lyman
  Date: 06 September 2020
  Description: Controls orders component logic. Binds to invoice component
 */

import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { InvoiceComponent } from "../invoice/invoice.component";


@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]

})


export class OrdersComponent {

  //Public variable to hold input data. Binds to Invoice
  public service = {
    password: { name: "", price: null },
    spyware: { name: "", price: null },
    memory: { name: "", price: null },
    software: { name: "", price: null },
    tuneUp: { name: "", price: null },
    cleanUp: { name: "", price: null },
    keyboard: { name: "", price: null },
    labor: { name: "", price: null },
    parts: { name: "", info: "" },
    total: { name: "", price: null }
  };

//Constructor function public variable invoice using Material Dialog
  constructor(public invoice: MatDialog) {}

  ngOnInit() {}

//Function with newly instantiated variable with dialog box opening from Invoice Component
  openInvoice() {
    let dialogConfig = new MatDialogConfig();

    let modalTest = this.invoice.open(InvoiceComponent, {
      width: "55%",
      height: "90%"
    });


    modalTest.componentInstance.service = this.service;
  }

  //Function with binding parameters to display each service on form
  onSubmit(formData) {
    if (formData.orderForm.password) {
      this.service.password.name = "Password Reset";
      this.service.password.price = 39.99;
    }

    if (formData.orderForm.spyware) {
      this.service.spyware.name = "Spyware Removal";
      this.service.spyware.price = 99.99;
    }

    if (formData.orderForm.memory) {
      this.service.memory.name = "RAM Upgrade";
      this.service.memory.price = 129.99;
    }

    if (formData.orderForm.software) {
      this.service.software.name = "Software Installation";
      this.service.software.price = 49.99;
    }

    if (formData.orderForm.tuneUp) {
      this.service.tuneUp.name = "Tune-Up";
      this.service.tuneUp.price = 89.99;
    }

    if (formData.orderForm.cleanUp) {
      this.service.cleanUp.name = "Disk Clean-Up";
      this.service.cleanUp.price = 149.99;
    }

    if (formData.orderForm.keyboard) {
      this.service.keyboard.name = "Keyboard Cleaning";
      this.service.keyboard.price = 45.0;
    }

    if (formData.orderForm.labor) {
      this.service.labor.name = "Labor Costs @ $50/hr";
      const laborAmount = formData.orderForm.labor * 50;
      this.service.labor.price = laborAmount;
    }

    if (formData.orderForm.parts) {
      this.service.parts.name = "Parts";
      this.service.parts.info = formData.orderForm.parts;
    }

    if (formData.orderForm) {
      this.service.total.name = "Total";
      this.service.total.price =
        this.service.password.price +
        this.service.spyware.price +
        this.service.memory.price +
        this.service.software.price +
        this.service.tuneUp.price +
        this.service.cleanUp.price +
        this.service.keyboard.price +
        this.service.labor.price;
    }

    //Displays new instance of invoice
    this.openInvoice();
  }
}

//End Orders Component logic page
