const sayHelloArrow = () => "Hello, world!";
console.log(sayHelloArrow()); 

const doubleArrow = x => x * 2;
console.log(doubleArrow(5)); 

const addArrow = (x, y) => x + y;
console.log(addArrow(3, 2)); 

const personArrow = {
    name: "Ade",
    sayHi: () => "Hi, " + this.name + "!" 
};
console.log(personArrow.sayHi()); 