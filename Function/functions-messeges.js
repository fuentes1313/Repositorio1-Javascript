// Function for to send a messeges hello
function sayHello (nameHello){
    let msg = "Hello " + nameHello + ". How are you?";
    return msg;
}

// Function for to send a messeges goodbye
function sayGoodbye (namebye){
    let msgBye = namebye + " goodbye, it was a pleasure"; 
    return msgBye;
} 

// Function for to send a messeges good morning
function sayGoodmorning (nameGm1, nameGm2){
    // define the variable
    let msgGoodmorning = "Good morning " + nameGm1 + " and " + nameGm2;
    return msgGoodmorning;
}

// Function for to send a messeges good afternoon
function sayGoodafternoon (nameGa1){
    // define the variable
    console.log("Good afternoon dear " + nameGa1);
}

console.log(sayHello("World"));
console.log(sayGoodbye("Francisco"));
console.log(sayGoodmorning("Olmara", "Francisco"));
sayGoodafternoon("Yani and Selena");