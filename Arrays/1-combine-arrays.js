console.log("Combinar 2 arreglos en un tercero con .concat");
function combineArray(array1, array2) {
    
    let array3 = array1.concat (array2);
    return array3
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]


console.log("LLENAR UN ARREGLO CON WHILE")
let i = 0;
let arrayone = [];
while (i <= 8){
    arrayone.push (i);
    i++
}
console.log (arrayone);

console.log("MULTIPLICAR POR 2 CADA VALOR DEL ARREGLO");
let arraydouble = [];
for (j=0; j<arrayone.length; j+=1){
    let double = arrayone [j] * 2;
    arraydouble [j]= double;
}
console.log (arraydouble);

