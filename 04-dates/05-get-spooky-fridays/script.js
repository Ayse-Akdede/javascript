/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        // var m = new Array(13);
        // m[1] = "Janvier";
        // m[2] = "Février";
        // m[3] = "Mars";
        // m[4] = "Avril";
        // m[5] = "Mai";
        // m[6] = "Juin";
        // m[7] = "Juillet";
        // m[8] = "Août";
        // m[9] = "Septembre";
        // m[10] = "Octobre";
        // m[11] = "Novembre";
        // m[12] = "Décembre";
        var d = new Date(input);
        var moi = d.getMonth(); // les mois vont de 0 à 12
        var mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');

        var input = document.getElementById("year").value;

        var counter = 0;

        console.log("Vendredi 13 est présent dans les mois de : ");
        alert("Vendredi 13 est présent dans les mois de : ");

        for (moi = 0; moi < 12; moi++) {
            d.setFullYear(input, moi, 13);

            if (d.getDay() == 5) {
                console.log(mois[moi]);
                alert(mois[moi]);

                counter++;
            }

        }
        console.log("Les " + counter + " « Vendredi 13 » en " + input);
        alert("Il y a donc " + counter + " « Vendredi 13 » en " + input);
    });
})();