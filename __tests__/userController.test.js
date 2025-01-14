//1. importamos dependencias modulos y funciones

import supertest from "supertest";
import app from "../app.js";//nos permite probar la conexion con la base de datos, probar rutas-> probar los controllers
import mongoose from "mongoose";
import { userModel } from "../src/models/users.model.js";

//2. definir bloques de pruebas

describe("Pruebas de los controladores de los usuarios", () => {

    /*
    
    CONFIGURACION GLOBAL DE LAS PRUEBAS
    beforeEach->para ejecutar acciones que queramos que se hagan antes de cada prueba
    
    afterAll-> ejecuta acciones que queremos que se hagan al final de Todas las peticiones
    */

    //limpiar base de datos antes de cada prueba
    beforeEach(async () => {
        await userModel.deleteMany({});//borre todo de la base de datos
    });


    // cerrar la cponexon a mongDB despuies de todas las pruebas

    afterAll(async () => {
        await mongoose.connection.close();
    });


    const testUser = {
        fullName: "johan",
        email: "johan@gmail.com",
        password: "123"
    }

    //2.1 defino bloque de pruebas para peticion POST
    describe("Pruebas a la petion POST /users", () => {

        /*
        casos exitosos
        casos fallidos
        elementos no encintrados
        */

        //primer caso de prueba: creacion de usuarios
        it("deberia crear usuarios correctamente",async() => {
            const res = await supertest(app).post("/usuarios/").send(testUser);

            //definir que esperamos que suceda
            expect(res.statusCode).toBe(201);
        });


        //segundo caso de prueba: error si falta campo obligatorio
        it("deberia devolver un error si falta algun campo obligatorio",async() => {
            const res = await supertest(app).post("/usuarios/").send({email: testUser.fullName});

            //definir que esperamos que suceda
            expect(res.body).toHaveProperty("mensaje", "Ocurrió un error al crear un usuario");
        });

    });

    //2.2 defino bloque de pruebas para peticion GET
    describe("Pruebas a la petion GET /users", () => {


//primer caso de prueba: deberia indicar que no hay usuarios almacenados
it("deberia indicar que no hay usuarios almacenados",async()=>{
const res = await supertest(app).get("/usuarios")
expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty("mensaje","No hay usuarios almacenados")
});

// si van a probar que funcione la peticion get teniendo usuariois almacenados
   // await new userModel(testUser).save();//deben primero guardar un usuario

    });

});
