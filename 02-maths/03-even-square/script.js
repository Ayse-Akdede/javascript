/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here

        for (i = 1; i <= 21; i++) {
            if (i % 2 == 0) {
                console.log(i); //le nombre a rendre en carré
                console.log(Math.pow(i, 2)); //le nombre rendu en carré
            }
        }


    });
})();