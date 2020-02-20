/*
====================
Title:Exercise 1.3 - Class Refresher
Author: Ashleigh Lyman
Date: 20 February 2020
Modified by:
Description: Working with cell phone function
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('../Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 1.3 - Class Refresher Functions', '02/20/2020'));

console.log("\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/


// start program

function Cellphone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    //get price
    this.getPrice = function() {
        return this.price;
    }

    this.getModel = function() {
        return this.model;
    }

    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
            "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }

}

var cellPhone = new Cellphone("Apple", "iPhone X", "White", "$399.99");

console.log(cellPhone.getDetails());

// end program
