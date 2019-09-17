/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("input", () => { // lorsque j'encode des caractères
        var input = document.getElementById("pass-one").value; //déclarer la variable 
        document.getElementById("pass-one").setAttribute('maxlength', 10); // La longeur maximum de pass-one est de 10 caractere
        document.getElementById("counter").innerHTML = input.length + ' /10'; // Le compteur est égal au nombre de caractère encodé
    });
})();