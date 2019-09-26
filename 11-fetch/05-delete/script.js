/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener("click", async () => {

        try {

            let id = parseInt(document.getElementById("hero-id").value); //déclarer la variable 
            await fetch(`http://localhost:3000/heroes/${id}`, { // attendre que ceci soit executé 
                    method: 'DELETE', // suppression
                })
                .then(res => res.json())
                .then(() => {
                    console.log("L'héro avec l'ID " + id + " a été supprimé");
                })

        } finally { // une fois l'exécution précédente finie, exécuter celle-ci afin d'afficher les héros actuel
            fetch("http://localhost:3000/heroes")
                .then(heroes => heroes.json())
                .then(hero => {
                    console.log(hero);
                })
        }
    });
})();