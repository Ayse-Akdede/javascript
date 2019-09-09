/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var reponse = prompt("Veux-tu du gâteau ? oui/non");
    if (reponse == "oui") {
        alert("Félicitations");
    } else {
        alert("du gateau ca se refuse pas");
    } // your code here
})();