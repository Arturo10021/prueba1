function cantDeOcurrencias(frase) {
    let fraseEnMinusculas = frase.toLowerCase();
    let palabras = fraseEnMinusculas.split(" ");
    let ocurrencias = {};
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (ocurrencias[palabra] === undefined) {
            ocurrencias[palabra] = 1;
        } else {
            ocurrencias[palabra]++;
        }
    }
    return ocurrencias;
}

export default cantDeOcurrencias;