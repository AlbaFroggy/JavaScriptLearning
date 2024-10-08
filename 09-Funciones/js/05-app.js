

function InciarApp(){
    console.log("Iniciando App....");

    SegundaFuncion();
}

InciarApp();

function SegundaFuncion(){
    console.log("Desde la segunda funcion");
    UsuarioAutenticado('Angela')
}


function UsuarioAutenticado( nombre){
    console.log('Autenticando usuario....');
    console.log(`Usuario ${nombre} autenticado existosamente`);
}