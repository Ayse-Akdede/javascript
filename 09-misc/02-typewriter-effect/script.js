/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('target').innerHTML = " ";
    var txt = "Voici mon texte au hazard qui va apparaitre petit a petit , lettre par lettre."

    var i = 0;
    var speed = 160;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById('target').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

})();