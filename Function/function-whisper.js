function whisper(str) {
    let stringLowerCase = "Lowercase is " + str.toLowerCase();
    let stringUpperCase = "Uppercase is " + str.toUpperCase();
    let LowerandUpper = (stringLowerCase + " and " + stringUpperCase);
    return LowerandUpper;
}

console.log (whisper("Hey Buddy"));
console.log (whisper("YEA! that was fun"));