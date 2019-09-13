/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Extraire le lien contenu dans Data-image de Source
    let source = document.getElementById("source");
    let lien = source.getAttribute("data-image");

    // Création de la balise img
    let img = document.createElement("img");
    // mettre l'url a la source de la balise img
    img.src = lien;
    // Déclarer la variable Target
    let target = document.getElementById("target");
    // placer l'img hiérarchiquement dans le target
    target.appendChild(img);
    // retirer l'element avec comment id source
    source.parentNode.removeChild(source);
})();