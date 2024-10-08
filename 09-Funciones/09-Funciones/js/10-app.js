const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Auriculares', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];

const nuevoArray1=carrito.forEach((producto)=>{
    return `${producto.nombre}-Precio:${producto.precio}`;    

} );  //No Crea la variable por lo que nuevoArray1 estará vacio

const nuevoArray2=carrito.map((producto)=>{
    return `${producto.nombre}-Precio:${producto.precio}`;    

} );       //Map crea un nuevo array donde mete el resultado

console.log(nuevoArray1);
console.log(nuevoArray2);


//Podemos quitar los paréntesis por que sólo hay un parámetro

const nuevoArray3=carrito.map(producto=>{
    return `${producto.nombre}-Precio:${producto.precio}`;    

} ); 

console.log(nuevoArray3);

//Cuando sólo hay una línea puedo quitar las llaves

const nuevoArray4=carrito.map( producto=>`${producto.nombre}-Precio:${producto.precio}`);
console.log(nuevoArray4); 