// Creamos una función que devuelve una promesa
function dividirNumeros(dividendo, divisor) {
    // Creamos una nueva promesa
    return new Promise((resolve, reject) => {
      // Verificamos si el divisor es cero
      if (divisor === 0) {
        // Si es cero, rechazamos la promesa con un mensaje de error
        reject("No se puede dividir por cero");
      } else {
        // Si no es cero, realizamos la división y resolvemos la promesa con el resultado
        resolve(dividendo / divisor);
      }
    });
  }
  
  // Creamos una instancia de la promesa
  let miPromesa = dividirNumeros(10, 2);
  
  // Manejamos el estado de la promesa
  miPromesa.then(
    // Manejador de éxito, la promesa se resolvió
    resultado => {
      console.log("La división fue exitosa:", resultado);
    },
    // Manejador de error, la promesa fue rechazada
    error => {
      console.error("Ocurrió un error al dividir:", error);
    }
  );
  
  // Creamos una instancia de la promesa con un divisor igual a cero
  let miOtraPromesa = dividirNumeros(10, 0);
  
  // Manejamos el estado de la promesa
  miOtraPromesa.then(
    // Manejador de éxito, la promesa se resolvió
    resultado => {
      console.log("La división fue exitosa:", resultado);
    },
    // Manejador de error, la promesa fue rechazada
    error => {
      console.error("Ocurrió un error al dividir:", error);
    }
  );
