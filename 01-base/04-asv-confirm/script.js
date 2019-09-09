/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    do {
        var age = prompt("Quel est ton age? ");
        var sex = prompt("quel est ton sexe? ");
        var ville = prompt("quelle est ta ville? ");

        alert("ton age: " + age +
            "\n ton sex : " + sex +
            "\n ta ville : " + ville);

        var confirm = prompt("Est-ce que t'es sur ? Oui/Non");

        if (confirm == "Oui") {
            alert("Good");
        }
    }
    while (confirm == "Non");

})();