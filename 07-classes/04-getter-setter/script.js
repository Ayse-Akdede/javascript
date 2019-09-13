/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person { // classe Person
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() { // Getter
            return this.firstname + " " + this.lastname;
        }
        set name(name) { // Setter
            let newName = name.split(" ");
            this.firstname = newName[0];
            this.lastname = newName[1];
        }
    }
    document.getElementById("run").addEventListener("click", () => { // au click
        const me = new Person("Ayse", "Akdede"); // afficher nom et prenom
        console.log(me.name);
        me.name = "Cat Dog"; // nouveau nom et prénom
        console.log(me.name);
    });
})();