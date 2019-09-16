/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let counter = 0; // compteur a zero

    document.getElementById("next").addEventListener("click", () => {
        counter++;
        let source = document.querySelector("img");

        if (counter >= gallery.length) { //compteur a cinq car 5 img
            counter = 0; // si ca dépasse 5 alors re-zéro
        }
        source.setAttribute("src", gallery[counter]); //nouvel src a partir de array
    });

    // your code here
})();