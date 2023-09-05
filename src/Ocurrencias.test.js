import cantDeOcurrencias from "./Ocurrencias.js";

describe("CantOcurrencias", () => {
    it("deberia devolver la cantidad de ocurrencias de todas las palabras en una frase sin improtar mayusculas y minusculas", () => {
        expect(cantDeOcurrencias('hola hola')).toEqual({ hola: 2 });
    });
    it("deberia devolver la cantidad de ocurrencias de todas las palabras en una frase sin improtar mayusculas y minusculas", () => {
        expect(cantDeOcurrencias("hola Hola")).toEqual({ hola: 2 });
    });
    it("deberia devolver la cantidad de ocurrencias de todas las palabras en una frase sin improtar mayusculas y minusculas", () => {
        expect(cantDeOcurrencias("hola Hola hola")).toEqual({ hola: 3 });
    });
    it("deberia devolver la cantidad de ocurrencias de todas las palabras en una frase sin improtar mayusculas y minusculas", () => {
        expect(cantDeOcurrencias("hola Hola mundo mundo mundo")).toEqual({ hola: 2, mundo: 3 });
    });
    it("deberia devolver la cantidad de ocurrencias de todas las palabras en una frase sin improtar mayusculas y minusculas", () => {
        expect(cantDeOcurrencias("El password de mi cuenta es PASSWORD Es un password de poco cuidado")).toEqual({ el: 1, password: 3, de: 2, mi: 1, cuenta: 1, es: 2, un: 1, poco: 1, cuidado: 1 });
    });
});