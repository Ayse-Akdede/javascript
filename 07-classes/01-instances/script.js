/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat { // classe Cat
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    } // Skitty, 9 ans, et Pixel, 6 ans.
    const firstCat = new Cat("Skitty", "9 ans") // premiere instance
    const secondCat = new Cat("Pixel", "6 ans") // seconde instance

    document.getElementById("run").addEventListener("click", () => { // au click
        console.log(firstCat); // afficher dans la console
        console.log(secondCat); // afficher dans la console
    });
})();