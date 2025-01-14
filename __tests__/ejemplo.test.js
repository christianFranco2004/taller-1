// las pruebas unitarias testean funciones

//1. importar funciones
import suma from "../src/utils/ejemplo.js";

//2. definir un bloque de prueba -> fin suma

/*
PALABRAS RESWERVADAS PARA HACER PRUEBAS SON:

Describe-> Agrupar el bloque de pruebas
It-> define casos individuales dentro de cada bloque dde pruebas
Expect - toBe -> que es lo que queremos que suseda -> definimos cual es la respuesta que debe suceder

*/

//1. paso una descripcion y luego una ffuncion flecha
describe("Probar funcion suma", () => {
    //aca eta nuestro bloque de pruebas

    //caso de prueba 1 donde se sumen numero positivos
    it("deberia sumar dos numeros positivos, correctamente", () => {
        expect(suma(5,2)).toBe(7);
    });

    //caso de prueba 2: se sumen numero negativos
    it("deber5ia sumar numero negartivos correctamente", () => {

        expect(suma(-2,-4)).toBe(-6);

    });

});