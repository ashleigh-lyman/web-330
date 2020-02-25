/*
============================================
; Title: Assignment 2.2
; Author: Ashleigh Lyman
; Date: 25 February 2020
; Modified By:
; Description: Prototypes
;===========================================
*/


//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 2.2 - Prototypes', '02/25/2020'));

//Empty Line
console.log("\n");




/*
 Expected output:

Ashleigh Lyman
 Exercise 2.2 - Prototypes
 02/25/2020

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//Create object literal with function to return age
var person = {
    getAge: function() {
        return this.age;
    }
};

//Create new object with age and name value
var john = Object.create(person, {
    "age": { "value": "32" },

    "fullname": { "value": "John Smith" }

});

//retrieve new instantiated object
john.getAge();

//Display outcome
console.log("The person's full name is: '%s'", john.fullname);
console.log("The person's age is '%s'", john.age);

// end program
