const reproductor={
    reproducr: id => console.log(`Reproduciendo canción ${id}`),
    pausar:() => {
        console.log('pausando....');
     }
}

reproductor.reproducr(30);
reproductor.pausar();


reproductor.borrar=function(id){
    console.log(`Borrando canción ${id}`);
}

reproductor.borrar(30);


const reproductor1={
    cancion:' ',
    reproducr: id => console.log(`Reproduciendo canción ${id}`),
    pausar:() => {
        console.log('pausando....');
     },
    set nuevaCanción(cancion){
        this.cancion=cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductor1.nuevaCanción='Cancion 1';
reproductor1.obtenerCancion;     // Como se trata del método get no es necesario el parentesis





