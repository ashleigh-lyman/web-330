/*
============================================
; Title: Assignment 3.3
; Author: Ashleigh Lyman
; Date: 3 March 2020
; Modified By:
; Description: Singleton Patterns
;===========================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.3 - Singleton Pattern', '03/03/2020'));

//Empty Line
console.log("\n");

/*
 Expected output:

 Ashleigh Lyman
 Exercise 3.3
 03/03/2020

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

//Created new function with instances, test if active
function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    //Display outcome
    console.log("Same database instance? %s", oracle === postgres);

}

databaseSingletonTest();

// end program
