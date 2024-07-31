function logBetween1 (lowNum, highNum){
    let i = lowNum;
    while (i<=highNum) {
        console.log(1);
    }
}

// Examples:
logBetween1(-1, 2); // prints out:
// -1
// 0
// 1
// 2

logBetween1(14, 6); // => prints nothing

logBetween1(4, 6); // prints out:
// 4
// 5
// 6