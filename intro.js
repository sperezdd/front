
//LET, VAR(ES6) y CONST (ES6)
var a = 1;
let b = 2;
const c = 5; // las constantes no puedeen cambiar su valor
//c=9;


if(true) {
    var a = 3;
    let b = 4;
    console.log(a)
    console.log(b)
}

console.log(a)
console.log(b)


// FOR
let colores = ['blanco','negro','gris']

console.log('FOR...')
for ( var i = 0 ; i < colores.length ; i++){
    console.log(colores[i]);
}

console.log('FOR IN...')
for( let i in colores) {
    console.log(i,colores[i]);
}

//FOR OF (ES6)
console.log('FOR FOR...')
for (let color of colores){
    console.log(color)
}

//forEach
console.log('FOREACH...') //recibe una funcion como parametro
function muestraColor(color,pos){
    console.log(pos,color)
}
colores.forEach(muestraColor);

colores.forEach(function(color, pos){
    console.log(pos,color)
})

//Funciones flecha (Arrow functions) (ES6)
colores.forEach((color, pos) => {
    console.log(pos,color)
})

colores.forEach(() => console.log('hay un color'))

let suma = (n1, n2) => n1+n2;
let suma1 = (n1, n2) => {
    return n1+n2 // si no ponemos return, devolveria undefined
}

let res = suma(1,2);
let res1 = suma(4,2);
console.log(res,res1)


function fn1(){
    function fn2(){
        function fn3(){

        }
    }
}

// Funciones recursivas
function factorial(numero){

    if(numero==1){
        return 1
    }
    else{
        return (numero*factorial(numero-1));
    }
}

console.log(factorial(3));

// Objetos y arrays
let mascotas = ['pez','perro','gato','periquito']

let pelicula = {
    titulo: 'The Expendables',
    duracion: 120,
    descripcion: 'Descripcion de la pelicula'
}

let prop = 'titulo'
console.log(pelicula.titulo);
console.log(pelicula['titulo']); 
console.log(pelicula[prop]);  //si el valor proviene de una variable no se puede acceder a traves del punto. El objeto no tiene una propiedad con el nombre de la variable

mascotas.push('ardilla')//introducir otro elemento al array
console.log(mascotas)

let ultimaMascota = mascotas.pop() //sacamos el ultimo elemento del array
console.log(mascotas)

mascotas.unshift(ultimaMascota) //añade el elemtno en la primera posciion del array
console.log(mascotas)

let primeraMascota = mascotas.shift() //sacamos el primer elemento del array
console.log(mascotas)

var algunasMascotas  = mascotas.splice(1, 2,primeraMascota) //indicamos las posiciones que queremos sacar, y lo que queremos introducir en su lugar. devuelve los objetos que hay en dichas posiciones
console.log(mascotas)
console.log(algunasMascotas)

let copiaMascotas = mascotas // coge la misma referencia, no crea un nuevo objeto. 
copiaMascotas.push('perro')
console.log(copiaMascotas)
console.log(mascotas)

let copiaMascotas1 = [].concat(mascotas) // copiar un array sin apuntar a la misma referencia. METODO 1. creamos un array nuevo, asi evitamos cambiar ambos
copiaMascotas1.push('serpiente');
console.log(mascotas)
console.log(copiaMascotas1)

//METODO 2. spread operator.
let copiaMascotas2 = [...mascotas] // cada elemento que encuentra en el array mascotas, lo coge y lo mete en e otro
let copiaMascotas21 = [mascotas]  // mete el array mascotas en la primera posicion del nuevo array creado.
ultimaMascota = mascotas.pop()
console.log(mascotas)
console.log(copiaMascotas2)
console.log(copiaMascotas21)

//desectructuracion de arrays y objetos

//let titulo = pelicula.titulo
//let descripcion = pelicula.descripcion
//let duracion = pelicula.duracion

  // paara desectructurar un objeto usamos llaves.
let { titulo: t, descripcion, duracion} = pelicula; //guarda pelicula.titulo en titulo, pelicula.duracion en duracion y pelicula.descripcion en descripcion
console.log('- Ditulo: ' + t, '- Descripcion: ' + descripcion, '- Duracion: ' + duracion)

    // para un array se usan corchetes
let [pez, ar , periquito] = copiaMascotas2;
console.log(pez, ar, periquito);

    // la posicion 2 se la salta
let [pez1, , ar1 , periquito1] = copiaMascotas2;
console.log(pez, ar, periquito);

    //guarda los elementos de las posicines que no usa en otro array llamado "_"
let [pez2, ar2 , ..._] = copiaMascotas2;
console.log(_);

//Metodo 1 para copiaar un objeto sin apuntar a la misma referencia (assign)
let peli1 = Object.assign({},pelicula, {duracion:130}) //asigna a un objeto vacio las propiedades y valores que hay dentro de peliculas. si ponemos desoyes algo como duracion, sobreescribe la propiedad que sea

console.log(pelicula)
console.log(peli1)

//Metodo 2 para copiar un objeto sinn apntar a la misma referencia (spread operatir (ES6))
let peli2 = {...pelicula, descripcion: 'una descripcion'};
console.log(pelicula)
console.log(peli2)

//string interpolacin (ES6). Lo imprime en distintas lineas sin necesidad del \n
console.log(`
    titulo: ${t},
    descripcion: ${descripcion},
    duracion: ${duracion}
`);

//funciones constructoras y prototype
function Pelicula(titulo, descripcion, duracion,estreno) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.estreno = estreno;
    //this.estaEstrenada = function(){
    //return new Date().getFullYear() >= this.estreno}
}

let peli100 = new Pelicula('pelicula 100', 'una descripcion', 100, 2000);
let peli101 = new Pelicula ('pelicula101','otra descripcion', 101, 2020);

console.log(peli100);
//console.log(peli100.estaEstrenada());

console.log(peli101);
//onsole.log(peli101.estaEstrenada());

Pelicula.prototype.estaEstrenada = function(){
    return new Date().getFullYear() >= this.estreno
}

String.prototype.repeat = function(numero){
    let cadena='';
    for (var i=0; i<numero;i++){
         cadena += this;
    }
    return cadena;
}
console.log(' hola '.repeat(3))
