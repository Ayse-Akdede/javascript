/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("input", () => { // lorsque j'encode des caractères

        var input = document.getElementById("pass-one").value; //déclarer la variable
        document.getElementById("pass-one").setAttribute('maxlength', 8); // nombre de caractere minimum
        digits = (/\d.*\d/); // minimum 2 chiffres

        if ((input.length === 8) && ((digits).test(input))) { // si le nombre de caractere est de 8 et si ca contient 2 chiffres
            validity.innerHTML = 'ok'; // alors ok
        } else validity.innerHTML = 'Pas ok'; // sinon pas ok


    });
})();