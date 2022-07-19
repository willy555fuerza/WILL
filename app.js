/*Uso de Varibles
var nombre = 'Willian';
console.log(nombre);
console.log(typeof(nombre));

var edad = 27;
console.log(edad);
console.log(typeof(edad));

edad = 'siete';
console.log(edad);
console.log(typeof(edad));

var sueldo = 199.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo)

    puestoDeTrabajo = null;
    console.log(puestoDeTrabajo);
***********/

/*************************** 
 * Operadores matematicos
 */

/*var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año que nacio Ana ' + yearAna);
console.log('Año que nacio Maria ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2);*/

/****
 * Operaciones Logicos, unarios y de asignacion
 */
//logicos < > <= >= ==
/*var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//unarios , ++Incrementos, --Decremento

//edadAna++;
console.log(++edadAna);
console.log(edadAna);

//Asignacion, += , -=, *=, %=

var a = 12;
var b = 5;

var c = a % 5; //Residuo o resta de una divisio 
console.log(c);

a +=b;
console.log(a);

/******************
 * Sentencia if.. else
 */
/**var nombre = 'Willian';
var esLibredetodomal = false;


if (esLibredetodomal == true){
    console.log(nombre + ' es Libre de todo mal');
} else{
    console.log(nombre + ' es soltero');
}*/

/*var nombre = 'Willian';
var apellido = 'Gonzales Ramirez';
var edad = '60';

//  edad < 12 es un niño
//  edad > 11, es < 18 es un adolescente
//  edad > 17, es < 60, es un adulto.
//  edad > 60 es un anciano.

if (edad < 12){
    console.log(nombre + 'es un niño.');
}else if((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente.');
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto');
}else {
    console.log(nombre + ' es un anciano');
}*/


/********
 * Sentencia Switch
 */

/*var mes = 8;

switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;

    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5: 
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;
    default: 
        console.log('Mes no encontrado.');
}
*/

/***
 *Sentencia For 
 */
/*for(var i=5; i<=100; i+=5){
    console.log(i);
}*///

/*******
 * Sentencia While, Do while
 */
 /*var i = 0;
 while(i >= 1){
    console.log(i);
    i--;
 }
 //console.log(i);

 /**********
  * Sentencia Do.. While
  */

 /*var i = 11;
 do{
    console.log(i);
    //i++;
 }while(i <= 10);
 console.log(i);*/
