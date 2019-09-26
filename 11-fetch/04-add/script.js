/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function ajoutHero(data) { // fonction async
        let response = await fetch('http://localhost:3000/heroes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let responseData = await response.json();
        console.log(responseData);
    }
    document.getElementById('run').addEventListener('click', () => {
        //déclarer les variables
        let name = document.getElementById('hero-name');
        let alterEgo = document.getElementById('hero-alter-ego');
        let powers = document.getElementById('hero-powers');
        let powersArr = powers.value.split(',');
        // ajouter si c'est pas vide
        if (name.value != '' && alterEgo.value != '' && powers.value != '') {
            ajoutHero({ // Appeler la foonction async
                name: name.value,
                alterEgo: alterEgo.value,
                abilities: powersArr
            });
        } else {
            alert("Remplissez tous les champs.");
        }
    });

})();