/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    var date = new Date; //date entière "Tue Sep 10 2019 10:59:43"
    var annee = date.getFullYear();

    var moi = date.getMonth(); // les mois vont de 0 à 12
    var mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');

    var j = date.getDate(); // le jour en chiffre 
    var jour = date.getDay(); // les jours vont de 0 à 6
    var jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');

    var h = date.getHours(); // heure actuelle
    var m = date.getMinutes(); //minute actuelle

    if (h < 10) { // pour afficher le zéro avant les heures exemple 03h20 au lieu de 3h30
        h = "0" + h;
    }

    if (m < 10) { // pour afficher le zéro avant les minutes exemple 10h01 au lieu de 10h1
        m = "0" + m;
    }

    resultat = jours[jour] + ' ' + j + ' ' + mois[moi] + ' ' + annee + ' , ' + h + 'h' + m;
    document.getElementById("target").innerHTML = resultat;

})();