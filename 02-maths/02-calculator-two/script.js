/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    const performOperation = operation => {

        // perform the operation
        switch (operation) {
            case "addition":
                let op1 = document.getElementById("op-one").value; //9
                let op2 = document.getElementById("op-two").value; //8
                let resultat1 = 0;

                resultat1 = parseInt(op1) + parseInt(op2);

                alert(resultat1);
                break;

            case "substraction":
                let op3 = document.getElementById("op-one").value;
                let op4 = document.getElementById("op-two").value;
                let resultat2 = 0;

                resultat2 = parseInt(op3) - parseInt(op4);
                alert(resultat2);
                break;

            case "multiplication":
                let op5 = document.getElementById("op-one").value;
                let op6 = document.getElementById("op-two").value;
                let resultat3 = 0;

                resultat3 = parseInt(op5) * parseInt(op6);

                alert(resultat3);
                break;
            case "division":
                let op7 = document.getElementById("op-one").value;
                let op8 = document.getElementById("op-two").value;
                let resultat4 = 0;

                resultat4 = parseInt(op7) / parseInt(op8);

                alert(resultat4);
                break;

        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),

        ),
    );
})();