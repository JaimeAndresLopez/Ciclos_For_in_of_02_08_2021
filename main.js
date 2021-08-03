for (let i = 0; i <=10; i++) {
    console.log(`Ciclo numero ${i}.`);
}
//Consta de una variable que marca el inicio del ciclo
// Una condicion la cual se evalua para ejecutar el codigo del ciclo
// Y un aumento

//Equivalente a un For con funciones flechas

let a = 0 ;
let b= 0;
const inicializacion = ()=> a;
const condicion = ()=>(a<10)?true:false;
const avance = ()=> a++;

for(inicializacion(); condicion(); avance()){
    console.log(`Ciclo ${a}`);
}

//Equivalente a un For con funciones declaradas
function inicio(){
    return b;
}
function condition(){
    return(b<10)?true:false;
}
function avances(){
    b++;
}
for(inicio();condition();avances()){
    console.log(`Soy el ciclo ${b}`);
}

const multiplo = 3;
for (let i = 0; i < 10; i++) {
    console.log(`${multiplo} X ${i+1} = ${multiplo*(i+1)}`);
}

//Tabla de Multiplicar hasta n numero
let n= 10;
for(i=0; i<n; i++){
    console.warn(`Tabla de multiplicar ${i}`);
    for(let x= 0; x<10; x++){
        console.log(`${i} X ${(x+1)} = ${i*(x+1)}`);
    }
}
//Objeto
console.log(Object('Jaime'));
console.warn(`OF`);
//Sacar los datos del objeto
for(let i of 'Jaime'){
    console.log(i);
}
console.warn(`IN`);
//Sacar los identificadores del objeto
for(let i in 'Jaime'){
    console.log(i);
}


Excluir:
console.warn("continue");
for (let i = 0; i < 10; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
}
console.warn("break");
Romper:
for (let i = 0; i < 10; i++) {
    console.log(i);
    if(i==5){
        break;
    }
}