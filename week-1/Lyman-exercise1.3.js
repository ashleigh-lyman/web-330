/*
============================================
; Title: Assignment 1.3
; Author: Ashleigh Lyman
; Date: 20 February 2020
; Modified By:
; Description: Function cellphone
;===========================================
*/


//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 1.3 - function cellphone', '02/20/2020'));

//Empty Line
console.log("\n");


/*
 Expected output:

Ashleigh Lyman
Exercise 1.3 - function cellphone
Date: 02/20/2020

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/


// start program

//Create CellPhone class with properties, using this keyword to assign variables
function CellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;


    //getPrice function, return
    this.getPrice = function() {
        return this.price;
    }

    //getModel function, return
    this.getModel = function() {
        return this.model;
    }

    //getDetails function, return string of input information
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\nModel: " +
            this.getModel() + "\nColor: " + this.color + "\nPrice: " +
            this.getPrice();
    }

}

//Declare variable with new keyword
var cellPhone = new CellPhone("Apple", "iPhone X", "White", "$399.99");


//Display outcome
console.log("----DISPLAYING CELLPHONE DETAILS----")
console.log(cellPhone.getDetails());

// end program