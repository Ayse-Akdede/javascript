/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal { // Inheritance Cat
        constructor(name, greeting) {
            super();
            this.name = name;
            this.constructor.greeting = greeting;
        }
    }
    class Dog extends Animal { // Inheritance Cat
        constructor(name, greeting) {
            super();
            this.name = name;
            this.constructor.greeting = greeting;
        }
    }

    const cat = new Cat("Chat ", "Miaouw "); // nouvelle constance
    const dog = new Dog("Chien ", "Waf-Waf "); // nouvelle constance

    document.getElementById("run").addEventListener("click", () => { // au click
        console.log(cat.sayHello()); // afficher dans la console la method + ma constance 
        console.log(dog.sayHello()); // afficher dans la console la method + ma constance 
    });
})();