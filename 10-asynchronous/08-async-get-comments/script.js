/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const affichePosts = async () => { // déclarer la variable

        const articles = await window.lib.getPosts(); //attendre que la console affiche queque chose
        console.log(articles);
        const comments = await window.lib.getComments();

        articles.forEach(article => {
            console.log(article.id);
            article.comments = comments
        });
    }

    document.getElementById("run").addEventListener("click", affichePosts); // button
})();