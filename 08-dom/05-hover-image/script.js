/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Hover : Over & Out
    document.querySelector("img").addEventListener("mouseover", mouseOver);
    document.querySelector("img").addEventListener("mouseout", mouseOut);
    // déclarer la variable img et img Original
    img = document.querySelector("img");
    let imgOriginal = img.src;
    // Hover
    function mouseOver() {
        // Extraire le lien de la deuxieme image
        let source = document.querySelector("img");
        let lien = source.getAttribute("data-hover");
        // remplacer l'ancien URL par le nouveau extrait
        img.src = lien;
    }
    // Unhover
    function mouseOut() {
        img.src = imgOriginal;
    }
})();