/*
============================================
; Title: Assignment 1.4
; Author: Ashleigh Lyman
; Date: 22 February 2020
; Modified By:
; Description: Duck typing interfaces
;===========================================
*/


//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 1.4 - Duck typing interfaces', '02/22/2020'));

//Empty Line
console.log("\n");





/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program


//Declare vehicle functions along with prototypes
function Car(model) {
    this.model = model;
}

Car.prototype.start = function() {
    console.log("Car added to the racetrack");
}

function Truck(model, year) {
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function() {
    console.log("Truck added to the racetrack");
}

function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack");
}

//Create variable array
var racetrack = [];

function driveIt(vehicle) {
    vehicle.start();

    racetrack.push(vehicle);
}


//Create new functions with properties
var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018");
var wrangler = new Jeep("Wrangler", "2016", "White");

console.log("");

driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);

//Display array outcome
console.log("\n -- The following vehicles have been added to the racetrack -- ");
for (var x = 0; x < racetrack.length; x++) {
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}
// end program
