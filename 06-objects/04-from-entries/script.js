/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    document.getElementById("run").addEventListener("click", () => {

        let entries = keys.map(function (_el, i) {
            return [keys[i], values[i]];
        });
        let obj = Object.fromEntries(entries); //  pair de Key et Value
        console.log(obj); // afficher dans la console

    });



})();