/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById('target'); // déclarer target
    let table = document.createElement('table'); // déclarer table
    target.appendChild(table); // table se trouve dans TARGET

    for (let i = 1; i <= 10; i++) { // multiplicateur
        for (let j = 1; j <= 10; j++) { // multiplicande
            tr = document.createElement('tr'); // création de la ligne Table Row
            table.appendChild(tr); // TR se trouve dans Table
            td = document.createElement('td'); // création des cellules Table Date
            tr.appendChild(td); // TD se trouve dans TR
            td.innerHTML = (i + " x " + j + " = " + i * j);
        }
    }
})();