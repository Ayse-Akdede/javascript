/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [{
            id: "0001",
            available: false,
            user: "leny",
            os: "macOS"
        },
        {
            id: "0002",
            available: false,
            user: "Nicolas"
        },
        {
            id: "0003"
        },
        {
            id: "0004",
            os: "Windows"
        },
        {
            id: "0005"
        },
        {
            id: "0006",
            os: "macOS"
        },
        {
            id: "0007"
        },
        {
            id: "0008"
        },
        {
            id: "0009",
            available: false,
            user: "Anthony"
        },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    document.getElementById("run").addEventListener("click", () => {
        // TYPEOF : Undefined or Bolean (true or false) or String or Number
        for (let i = 0; i < computers.length; i++) {
            if (typeof computers[i].available === "undefined") { // si available "undefined" alors ajouter
                computers[i].available = defaultProps.available;
            }
            if (typeof computers[i].user === "undefined") { // si use "undefined" alors ajouter
                computers[i].user = defaultProps.user;
            }
            if (typeof computers[i].os === "undefined") { // si computer "undefined" alors ajouter
                computers[i].os = defaultProps.os;
            }
        };
        console.log(computers);
    });
})();