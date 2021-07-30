
//deep equal
function deepEqual(element1, element2) {

    if(element1 === element2) return true; // si es el mismo regresa true

    if((element1 !== Object(element1)) && (element2 !== Object(element2))) return element1 === element2; // si solo son primitivos

    if(Object.keys(element1).length !== Object.keys(element2).length) return false; // si tienen diferentes longitudes no son iguales

    //ahora si si son de la misma lingitud
    for(let key in element1)
    {
        if(!(key in element2)) return false; 
        // recusivo a cada elemento por si hay objetos dentro de objetos
        if(!deepEqual(element1[key], element2[key])) return false;
    }

    return true;
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
   }

   

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

// Chunk

function chunk(array, size) {
    const mainArray=[]; //Se reserva espacio para el array principal
    var bins = Math.ceil(array.length / size); //Se calcula el número de arrays secundarios dentro del primario
    var count = 0; //Se crea un contador para iterar los valores de Data[]

    for (let index = 0; index < bins; index++) { //Se itera hasta la cantidad de arrays secundarios necesarios (bins)
        mainArray[index]=[] //En cada iteracion se crea un array secundario
        for (let column = 0; column < size; column++) { //Se itera hasta la cantidad de numeros que tendrá cada array secundario (column)
            if (count<data.length){ // Si se acaban los numeros de data[] (data.length) deja de asignar valores al array secundario
                mainArray[index][column] = data[count];//asigna el valor de data correspondiente al vector secundario en Index en la posicion column
                count++; //cambio al siguiente valor de data[]
            }
        }      
    }          
        return mainArray;//regreso el array principal con cada array secundario dentro de él y sus valores dentro de éstos
    };
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8]

  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]