/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
        console.log("avant : " + fruits); //afficher dans la console tableau DEBUT
        fruits.shift(); // Supprimer premier élément
        fruits.pop(); // Supprimer derniere élément
        fruits.unshift("banane"); // Ajouter premier élément
        fruits.push("kiwi"); // Ajouter dernier élément
        console.log("après : " + fruits); //afficher dans la console tableau FINAL

    });
})();