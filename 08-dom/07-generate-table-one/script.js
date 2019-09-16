/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    target = document.getElementById('target'); // déclarer target
    table = document.createElement('table'); // déclarer table
    target.appendChild(table); // l'élement target contient la table

    for (let i = 0; i < 10; i++) {
        tr = document.createElement('tr'); // création de la ligne Table Row
        table.appendChild(tr); // TR se trouve dans Table
        td = document.createElement('td'); // création des cellules Table Date
        tr.appendChild(td); // TD se trouve dans TR
        td.innerHTML = "row " + (i + 1); // afficher dans chaque TD row+numero
    }

})();