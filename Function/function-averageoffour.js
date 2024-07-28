function averageOfFour (num1, num2, num3, num4){
    // declare the variable
    let average4 = (num1 + num2 + num3 + num4)/4;
    return average4;
}

averageone = averageOfFour (10, 10, 15, 5);
averagetwo = averageOfFour (3, 10, 11, 4);
averagethree = averageOfFour (1, 2, 3, 4);

console.log ("Los promedios calculados son: " + averageone + ", " + averagetwo + "y " + averagethree);