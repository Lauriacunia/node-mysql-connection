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
knex(options).schema.createTableIfNotExists('productos', (table) => {
    table.increments('id').primary();
    table.string('nombre');
    table.string('descripcion');
    table.integer('precio');
    table.integer('cantidad');
}).then(() => {
    console.log('Tabla creada');
}
).catch((err) => {
    console.log(err);
}
);


/** CONNECTION SERVER */

try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}