function printFives(max){
let nummax = max;
for (let i = 0; i < nummax; i++){
    
    if (i % 5 === 0) {
        console.log(i);    
    }
}
}

printFives(20) // prints out:
// 0
// 5
// 10
// 15