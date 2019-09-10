/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        var today = new Date()
        var dnow = today.getDate();
        var mnow = today.getMonth();
        var ynow = today.getFullYear();

        console.log(dnow);
        console.log(mnow);
        console.log(ynow);

        var day = parseInt(document.getElementById("dob-day").value);
        var month = parseInt(document.getElementById("dob-month").value);
        var year = parseInt(document.getElementById("dob-year").value);

        console.log(day);
        console.log(month);
        console.log(year);

        if (mnow - month > 0) {
            var age = ynow - year;
            alert(age + " ans ");

        } else if (mnow - month < 0) {
            var age = ynow - year;
            alert(age + " ans");
        } else if (mnow - month == 0 && dnow - day >= 0) {
            var age = ynow - year;
            alert(age + " ans");
        } else {
            var age = ynow - year - 1;
            alert(age + " ans");
        }

    });
})();