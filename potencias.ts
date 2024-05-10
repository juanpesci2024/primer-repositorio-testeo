import * as rls from 'readline-sync';
let base: number = -999;
let potencia: number = -999;


// Carga de datos por teclado.
base= rls.questionInt("Ingrese un valor para la base: ");
potencia = rls.questionInt("Ingrese un valor para el exponente: ")
while (potencia < 0){
        console.log("Solo se admiten exponentes mayores que cero o iguales que 0");
        console.log("");
        potencia = rls.questionInt("Ingrese un valor para el exponente: ");
}

// Función que calcula la potencia de un numero.
function calcularPotencia(base1: number, potencia1:number): number {
    let resultado : number = 1;
    if (potencia1 >= 0){
        for (let i = 0; i < potencia; i++ ){
        resultado = (base * resultado);
     }
         if (potencia == 0) {
             resultado = 1;
    
         }  
    }
    return resultado
    }

// Imprime por pantalla el resultudo de la función
console.log("El resultado de: " + base + " elevado a la " + potencia + " = " +(calcularPotencia(base, potencia,)));


