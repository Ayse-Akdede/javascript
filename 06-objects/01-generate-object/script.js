/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        let myInfo = new Object; //initialiser l'objet
        myInfo.lastname = "Akdede" // initialiser les propriétes de l'objet
        myInfo.firstname = "Ayse"
        myInfo.age = 22
        myInfo.city = "Liège"
        myInfo.country = "Belgique"

        console.log(myInfo); //afficher l'objet complet dans la console
    });


})();