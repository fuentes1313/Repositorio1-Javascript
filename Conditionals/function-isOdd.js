// Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.
// Write two versions of this function, one using conditionals (if) and one without using conditionals.

function isOdd (number){
    if (number % 2 !== 0) {
        let mensaje = "The number "+ number + " is odd";
        return mensaje;
    } else {
        let mensaje = "The number "+ number + " is not odd";
        return mensaje;
    }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true

// Esta función es sin usar condicional
function isOdd1 (num){
    return (num % 2 !== 0);
}
let numero1 = 2;
let numero2 = 3;
let numero3 = -17;
console.log ("¿El número "+ numero1 + " es impar? "+ isOdd1 (numero1));
console.log ("¿El número "+ numero2 + " es impar? "+ isOdd1 (numero2));
console.log ("¿El número "+ numero3 + " es impar? "+ isOdd1 (numero3));