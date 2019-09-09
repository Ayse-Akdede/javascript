/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    for (var x = 1; x <= 100; x++) {

        if ((0 == x % 3) && (0 == x % 5)) { // si c'est un mutiple de 3 et 5
            console.log(x + ' FizzBuzz');

        } else if (x % 3 == 0) { // si c'est un mutiple de 3
            console.log(x + ' Fizz');

        } else if (x % 5 == 0) { // si c'est un mutiple de 5
            console.log(x + ' Buzz');

        } else if (x = x) { // si c'est le reste
            console.log(x);
        }
    }

})();