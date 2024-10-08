
function Sumar(a,b){ //parámetros
    console.log(a+b);
}

Sumar(2,3); //argumentos


function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Enrique","Galindo");

//Parámetros por default

function saludar2(nombre='Desconocido', apellido='No tiene apellido'){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar2("Pedro");

