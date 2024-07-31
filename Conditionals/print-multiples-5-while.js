console.log ("FUNCIÓN CON WHILE")

function multiplos (max) {
let i = 0
numero = max
while (i<numero){
        let resultado = (i * 5);
        if (resultado < max){
        console.log (resultado);
        }
        i++;
        }
}
multiplos(20);