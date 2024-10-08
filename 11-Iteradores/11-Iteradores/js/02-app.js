for(let i=0; i<10;i++){
    if(i === 5){
        console.log('Este es el 5');
        break;
    }
    console.log(`Numero:${i}`);
}

console.log("Continua por aki");

//El break rompe la secuencia del for, de modo que
//cuando llega a 5 se sale del for y continúa por la 
//siguiente instrucción después del for

for(let i=0; i<10;i++){
    if(i === 5){
        console.log('Este es el 5');
        continue;
    }
    console.log(`Numero:${i}`);
}

//Cuando i es igual a 5 se ejecuta continue, 
//pero no se ejecuta el siguiente console.log y vuelve
//al siguiente indice

const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200,descuento:true},
    {nombre:'Auriculares', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];


for(let i=0; i<carrito.length;i++){
    if (carrito[i].descuento){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
    }
    console.log(carrito[i].nombre);
}