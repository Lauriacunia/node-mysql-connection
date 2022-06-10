import express from 'express';
import http from 'http';
import morgan from 'morgan';
const app = express();
/** DB */
import {options} from '../configDB.js';
import knex from 'knex';


/** Middleware */
app.use(express.static( '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

/** queries */
/** Con .then */
/**Create table */
// knex(options).schema.createTableIfNotExists('usuarios', (table) => {
//     table.increments('id').primary().unique();
//     table.string('name');
//     table.string('email');
//     table.integer('edad');
// }).then(() => {
//     console.log('Tabla creada');
//     /**Insert registros */
//     knex(options)('usuarios').insert(usuarios).then(() => {
//         console.log('Datos insertados');
//     }
//     )
// }
// ).catch((err) => {
//     console.log(err);
// }
// );

/**Con async - await */
(async () => {
    try {
        /**create table */
        await knex(options).schema.createTableIfNotExists('usuarios', (table) => {
            table.increments('id').primary().unique();
            table.string('name');
            table.string('email');
            table.integer('edad');
        });
        /** 🦸‍♀️ CREATE - Insert raw (insertar uno o mas  registro(s))*/
        await knex(options)('usuarios').insert(usuarios);
        console.log('Datos insertados');
        /** 🦸‍♀️ READ - Consultar todos los registros de una tabla */
        await knex(options).from('usuarios').select('*').then((data) => {
            console.log(data);
        });
        /**Buscar un registro- Clausula WHERE */
        await knex(options).from('usuarios').where('name', 'Juan').select('*').then((data) => {
            console.log(data);
        });
        /**🦸‍♀️ UPDATE user by id */
        await knex(options).from('usuarios').where('id', 1).update({
            name: 'Juan Pablo'
        }).then((data) => {
            console.log(data);
        });
        /** 🦸‍♀️ DELETE  user by id */
        // await knex(options).from('usuarios').where('id', 1).del().then((data) => {
        //     console.log(data);
        // });
    } catch (err) {
        console.log(err);
    }
})();


/** CONNECTION SERVER */

try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}