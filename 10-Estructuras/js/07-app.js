const autenticado = true;
const puedePagar=true;

console.log(autenticado?'Si esta autenticado':'No esta autenticado');
console.log(autenticado && puedePagar?'Paga ':'No puedes pagar' );

console.log(autenticado ? puedePagar ? 'Si puede pagar':'No puede pagar' :'If anidados');