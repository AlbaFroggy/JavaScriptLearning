const pendientes=['Limpiar la cocina','Estudiar JavaScript','Trabajo HTML','Hacer la cama'];

//El for in  itera sobre objetos
for(let pendiente in pendientes){
  console.log(pendiente);  //NO hace lo que se espera
}

const automovil={
    modelo:'Toyota',
    year:2022,
    motor:'1.8'
}
for (let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

for (let[llave,valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}



