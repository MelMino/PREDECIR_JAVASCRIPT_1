/*Predecir las salidas de los codigos */

//Ejercicio N° 1 
//La variable hello esta definida despues del conssole.log por lo tanto tira undefined
console.log(hello);
var hello = 'world';

//Ejercicio N° 2
/*Se muestra por consola magnet puesto que la variable global needle no es llamada fuera de la 
fuera de la funcion en cambio en la funcion si se imrime pero la variable needle es local entonces imprime lo que 
este definido */
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

//Ejercicio N° 3
/*Se muestra por patalla super cool ya que se llama fuera funcion a la variable global brenda por lo tanto
y no se llama a la funcion tampoco*/
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//Ejercicio N° 4
/* Muestra por pantalla la variable global chicken luego como llama funcion muestra por pantalla
la variable local de la funcion que es half-chicken */
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//Ejercicio N° 5
/*Ocurre un error de sintaxis por lo tanto no ejecuta*/
/*mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);*/

//Ejercicio N° 6
/*Como aun no se definio la variable global genre va a imprimir un undefined luego llama la funcion
donde existe variables locales que se muestran por pantalla para luego mostrar la variable global previamente definida */
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//Ejercicio N° 7
/*Imprime la varible global dojo y luego las variables locales de funcion dojo  y nuevamente la variable golabal*/
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Ejercicio N° 8
/*Imprimira el primer console.log ya que cumple con las condiciones para añadir al objeto 
en cambio el segundo no  */
/*console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley",0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}*/







