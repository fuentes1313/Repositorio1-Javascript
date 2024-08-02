console.log("INICIA CÓDIGO PARA MULTIPLICAR POR 2 LOS VALORES DE UN ARREGLO cON WHILE")

// Función
function doubler(numbers) {
    let arraydouble = [];
    let arraysingle = numbers;
    let i = 0;
    while (i < arraysingle.length) {
        arraydouble[i]= arraysingle[i]*2;
        i ++;
    }
    // retornar el arreglo duplicado lleno
    return arraydouble;
}

// imprimir el valor que regresar la función invocada
console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]

console.log("INICIA CÓDIGO PARA MULTIPLICAR POR 2 LOS VALORES DE UN ARREGLO CON FOR")

// Función
function doubler(numbers) {
    let arraydouble = [];
    let arraysingle = numbers;
    for (let i = 0; i < arraysingle.length;i ++) {
        arraydouble[i]= arraysingle[i]*2;
    }
    return arraydouble;
    }
   // imprimir el valor que regresar la función invocada
console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]

console.log("LLENAR UN ARREGLO CON WHILE")
let i = 0;
let arrayone = [];
while (i <= 8){
    arrayone.push (i);
    i++
}
console.log (arrayone);