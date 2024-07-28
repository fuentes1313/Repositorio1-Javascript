
function isSubstring(searchString, subString) {
    let cadenacompleta = searchString.toLowerCase ();
    let subcadena = subString.toLowerCase ();
        
    if (cadenacompleta.indexOf(subcadena) != -1) {
        let resultadosiverdadero = "True";
        return resultadosiverdadero;
    }   else {
        let resultadosifalso = "False";
        return resultadosifalso;
    }

    
  }
  
console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false