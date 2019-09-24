/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(function (error, articles) { // appeler la fonction getPosts
            console.log(articles); // afficher les articles dans la console
            articles.forEach(article => { // démarrer la boucle (Pour chaque article des articles)
                console.log(article.id); // afficher dans la console
                window.lib.getComments(article.id, function (error, comments) { // appeler la fonction getComment dont les paramètres sont id et callback
                    console.log(comments); // afficher dans la console
                    article.comments = comments; // ajouter comments a chaque article
                });
            });
        });
    });
})();