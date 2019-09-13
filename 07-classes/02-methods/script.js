/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    class Person { // classe Person
        constructor(firstname, lastname) { // deux propriétés
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello() { // method de la class Person 
            return "Hello " + this.firstname + this.lastname;
        }
    }
    const me = new Person("Ayse ", "Akdede"); // nouvelle constance

    document.getElementById("run").addEventListener("click", () => { // au click
        console.log(me.sayHello()); // afficher dans la console la method + ma constance 
    });
})();