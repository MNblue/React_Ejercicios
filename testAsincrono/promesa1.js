
//función que crea y devuelve una promesa
function ejemploPromesa(valor){
    //devolvemos una promesa
    return new Promise((resolve, rejecte) =>{

        if(valor){
            resolve("operación exitosa");
        }else{
            rejecte("operación fallida");
        }
    });
}


//uso de la promesa
let resultadoPromesa = ejemploPromesa('hola');

resultadoPromesa
    .then((resultado) =>{
        console.log(resultado); // la promesa se cumple
    })

    .catch((error) =>{
        console.log(error); //la promesa fue rechazada
    });
