console.log("INICIANDO EL CICLO FOR")
function logBetweenStepper(numMin, numMax, step){
    for (i=numMin; i<=numMax;i+=step){
        console.log(i);
    }
}
logBetweenStepper(6,9,1);

console.log("INICIANDO EL CICLO WHILE")
function logBetweenStepper1(numMin1, numMax1, step1){
    let index=numMin1;
    while (index <= numMax1){
        console.log(index);
        index+=step1;
    }
}
logBetweenStepper1(-10,15,5);