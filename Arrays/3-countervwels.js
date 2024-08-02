// cuenta las vocales que encuentra en la expresión
function countVowels(word) {
    let lowerletter = word.toLowerCase ();
    let arrayString = lowerletter;
    let i = 0; 
    let contadorvocales = 0;
    while (i < arrayString.length){
        if (arrayString[i]==="a" || arrayString[i]==="e" || arrayString[i]==="i" || arrayString[i]==="o" || arrayString[i]==="u"){
            contadorvocales ++;
        }
        i ++;
    }
    return contadorvocales;
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2



  // cuenta las vocales que encuentra en la expresión con un arreglo de vocales

function contadordeVocales(word) {
    let lowerletter = word.toLowerCase ();
    let arrayString = lowerletter;
    let contadorvocales = 0;
    let listavocales = ["a","e","i","o","u"];
    let i = 0;
    while (i < arrayString.length){
        for (let j; arrayString[i] === listavocales[j]; j++) {
            contadorvocales ++;
        }
        i ++;
    }
    return contadorvocales;
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("Francisco pizzado")); // => 2