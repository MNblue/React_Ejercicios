// Creamos una función asincrónica que devuelve una promesa que se resolverá después de un cierto tiempo
async function esperar(ms) {
    // Creamos la promesa
    return new Promise((resolve, reject) => {
      // Simulamos la asincronía con setTimeout
      setTimeout(() => {
        resolve(`La promesa se resolvió después de ${ms} milisegundos`);
      }, ms);
    });
  }
  
  async function ejecutar() {
    try {
      // Creamos una instancia de la promesa y esperamos a que se resuelva
      let resultado = await esperar(8000); // Esperar 8 segundos
  
      // Una vez que se resuelve la promesa, imprimimos el resultado
      console.log(resultado);
    } catch (error) {
      // Manejamos cualquier error que ocurra durante la espera de la promesa
      console.error("Ocurrió un error:", error);
    }
    console.log("ha terminado la promesa, continuamos...")
  }
  
  console.log("Promesa pendiente...");
  
  // Llamamos a la función asincrónica
  ejecutar();
  
  console.log("Promesa aún no se ha resuelto, seguimos haciendo otras cosas...");
  console.log("¿Nos tomamos algo?");
  console.log("Vale, una Coca Cola fresquita con limón");
  