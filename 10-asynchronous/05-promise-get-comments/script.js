/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // --
        const maVar = window.lib.getPosts();
        const commts = window.lib.getComments();

        maVar.then((articles) => { // promise POSTS
            console.log(articles); // afficher les articles dans la console

            articles.forEach((article => {
                console.log(article.id); // afficher les id des articles un par un 
                commts.then((comments) => { // promise COMMENTS
                    console.log(comments); // afficher les commentaires
                    article.comments = comments; //ajouter les commentaires aux articles
                });
            }));
        });

    });

})();