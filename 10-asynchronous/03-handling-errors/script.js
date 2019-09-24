/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // console.error();
        window.lib.getPersons(function (error, persons) {

            if (persons == undefined) { // si le tableau personnnes est error ou null
                console.error(error); // afficher error si c'est error
            } else { // sinon
                console.log(persons); // afficher tableau de personnes
            }

        });
    });

})();