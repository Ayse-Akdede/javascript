/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").onclick = () => { // au click sur le bouton
        const fruits = [
            "cerise",
            "durian",
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "fraise",
            "durian",
            "pêche",
            "cerise",
            "raisin",
            "cerise",
        ];

        let unique = [...new Set(fruits)]; // option SET va automatiquement retirer les doubles
        console.log(unique); //afficher les fruits

    };
})();