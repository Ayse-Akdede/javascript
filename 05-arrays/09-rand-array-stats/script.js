/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => { //au click
        let numbers = []; // les nombres qui vont être généré

        for (let i = 0; i < 10; i++) {

            numbers[i] = Math.floor(Math.random() * 100); // Généré des nombres entier aléatoire entre 1 et 100
            document.getElementById("n-" + (i + 1)).innerHTML = numbers[i]; // afficher les élément ajouté, dans les cellules du tableau

        }
        document.getElementById("min").innerHTML = Math.min(...numbers); // num le + petit
        document.getElementById("max").innerHTML = Math.max(...numbers); // num le + grand
        document.getElementById("sum").innerHTML = numbers.reduce((a, b) => a + b, 0); // somme des nombres
        document.getElementById("average").innerHTML = numbers.reduce((a, b) => a + b, 0) / 10; // moyenne des nombres
    });
})();