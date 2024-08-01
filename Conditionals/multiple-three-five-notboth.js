console.log("INICIANDO CON CICLO FOR");
function fizzBuzz(max) {
    for (let i=0; i < max; i++){
        if (i%3===0 && i%5 ===0) {
            let both = i;
        } else if (i%3 ===0){
            console.log(i);
        } else if (i%5 ===0){
            console.log(i);
        }
    }
}

fizzBuzz(20)

console.log("INICIANDO CON CICLO WHILE");
function fizzBuzz1(max1) {
    let i=0;
    while (i < max1){
        if (i%3===0 && i%5 ===0) {
            let both = i;
        } else if (i%3 ===0){
            console.log(i);
        } else if (i%5 ===0){
            console.log(i);
        }
        i++
    }
}

fizzBuzz1(20)