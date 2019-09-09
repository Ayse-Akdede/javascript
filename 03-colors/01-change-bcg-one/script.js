/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    var rouge = document.getElementById("red"); {
        rouge.onclick = function () {
            document.body.style.background = "red";
        }
    }

    var vert = document.getElementById("green"); {
        vert.onclick = function () {
            document.body.style.background = "green";
        }
    }
    var jaune = document.getElementById("yellow"); {
        jaune.onclick = function () {
            document.body.style.background = "yellow";
        }
    }
    var bleue = document.getElementById("blue"); {
        bleue.onclick = function () {
            document.body.style.background = "blue";
        }
    }





})();