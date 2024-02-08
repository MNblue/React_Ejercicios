// Creamos una función que devuelve una promesa que se resolverá después de un cierto tiempo
function esperar(ms) {
    //crear la promesa
    return new Promise((resolve, reject) => {
       //simulamos la asincronia con setTimeout 
      setTimeout(() => {
        resolve(`La promesa se resolvió después de ${ms} milisegundos`);
      }, ms);
    });
  }
  
  // Creamos una instancia de la promesa
  let miPromesa = esperar(8000); // Esperar 8 segundos
  
  console.log("Promesa pendiente...");
  
  // Manejamos el estado de la promesa
  miPromesa
  .then(
    // Manejador de éxito, la promesa se resolvió
    resultado => {
      console.log(resultado);
    })

    // Manejador de error, la promesa fue rechazada
    .catch((error) =>{
        console.error("Ocurrió un error:", error); //la promesa fue rechazada
    });

  
  
  console.log("promesa aun no se ha resuelto, seguimos haciendo otras cosas...");
  console.log("nos tomamos algo ?");
  console.log("vale, una coca cola fresquita con limón");
