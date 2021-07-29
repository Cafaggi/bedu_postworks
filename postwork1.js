
function deepEqual(obj1, obj2) {

    if(obj1 === obj2) return true; // si es el mismo regresa true

    if((obj1 !== Object(obj1)) && (obj2 !== Object(obj2))) return obj1 === obj2; // si solo son primitivos

    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false; // si tienen diferentes longitudes no son iguales

    //ahora si si son de la misma lingitud
    for(let key in obj1)
    {
        if(!(key in obj2)) return false; 
        // recusivo a cada elemento por si hay objetos dentro de objetos
        if(!deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

