/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    document.getElementById("run").addEventListener("click", () => { // au click sur le bouton

        console.log("il y a " + people.size + " personnes."); // combien d'items dans le set


        if (people.has("Alexandre") == true) { // // vérifier si "alexandre" est dans le set, s'il en fait partie
            console.log("Oui, Alexandre fait partie du SET"); // ...alors afficher la phrase oui.
        } else
            console.log("Non, Alexandre ne fait pas partie du SET"); // ...sinon afficher la phrase non.

    });
})();