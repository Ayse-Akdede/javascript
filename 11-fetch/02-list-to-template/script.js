/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener("click", () => {




        fetch("http://localhost:3000/heroes")
            .then(heroes => heroes.json())
            .then(hero => {
                hero.forEach(function (element) {
                    const ol = document.querySelector("#target");
                    const li = document.createElement('li');
                    ol.appendChild(li);
                    li.innerHTML = element.name;
                });
            })
    });
})();