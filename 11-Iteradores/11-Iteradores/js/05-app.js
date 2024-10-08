const pendientes=['Limpiar la cocina','Estudiar JavaScript','Trabajo HTML','Hacer la cama'];

pendientes.forEach((pendiente)=>{
     console.log(pendiente);
})

//COMO SÓLO TIENE UNA LÍNEA SE PUEDE PONER DE ESTA FORMA
pendientes.forEach((pendiente)=>console.log(pendiente))
//COMO SÓLO TIENE UN PARÁMETRO SE PUEDE PONER DE ESTA FORMA
pendientes.forEach(pendiente=>console.log(pendiente))

//El foreach va a devolver en indice, el valor del indice del array
pendientes.forEach((pendiente,indice)=>console.log(`${indice}:${pendiente}`))

const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Auriculares', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];

carrito.forEach(producto => console.log(producto.nombre));

carrito.map(producto=>console.log(producto.nombre));

const nuevoArray=carrito.forEach(producto => producto.nombre);
const nuevoArray2=carrito.map(producto=>producto.nombre);

