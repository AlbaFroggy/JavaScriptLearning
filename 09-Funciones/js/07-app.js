//MÉTODOS DE PROPIEDAD

const reproductor={
    reproducr:function(id){
        console.log(`Reproduciendo canción ${id}`);
    },
    pausar:function(){
        console.log('pausando....');
    }
}

reproductor.reproducr(30);
reproductor.pausar();


reproductor.borrar=function(id){
    console.log(`Borrando canción ${id}`);
}

reproductor.borrar(30);

//Dejar como ejercicio que añadan dos métodos:
//Uno para crear una playlist junto con su nombre y otro para reproducir una playlist

