//Entrada de datos

let a = prompt('Ingrese un numero!');
let b = prompt('Ingrese un numero!');

//casting de datos
a = Number(a);
b = Number(b);

//operacion
//let suma = a + b;
let cociente = a/b;
let residuo = a%b;

//salida de datos

//document.write('la suma es: ', suma );
document.write('El cociente de la division es : ', cociente );
document.write('</br>El residuo de la division es : ', residuo );