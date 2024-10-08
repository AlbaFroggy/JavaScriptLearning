

const aprendiendo =function(tecnologia){
    console.log(`Aprendiendo  ${tecnologia}`);
}

aprendiendo('JavaScript');

const aprendiendo2 = (tecnologia)=>{
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo2('HTML');

//Cuando la función sólo tiene un línea se puede hacer de esta forma, está implícito el return
const aprendiendo3 = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo3('CSS');

const aprendiendo4 =(tecnologia) => `Aprendiendo ${tecnologia}`;
aprendiendo4('REACT');

//Cuando hay un sólo parámetro los parentesis son opcionales

const aprendiendo5= tecnologia => `Aprendiendo ${tecnologia}`;
aprendiendo('ANGULAR');