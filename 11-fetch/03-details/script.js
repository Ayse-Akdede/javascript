/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
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
            .then(heros => {
                let hero = null;
                heros.forEach(function (element) { // Si input value = element id alors sortir de la boucle
                    if (element.id == document.getElementById("hero-id").value) {
                        hero = element;
                    }
                });
                if (hero != null) { // si input égal hero id alors afficher dans le TARGET
                    const ol = document.querySelector("#target");
                    const li = document.createElement('li');
                    ol.appendChild(li);
                    li.innerHTML = hero.id + "<br>" + hero.name + "<br>" + hero.alterEgo + "<br>" + hero.abilities;
                } else {
                    alert("Il n'y a pas de Héro avec cet ID !"); // Msg alert
                }
            })
    });
})();