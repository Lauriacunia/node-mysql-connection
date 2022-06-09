# 🔥📲 ¿Cómo crear y levantar un proyecto Node Js? 🔥📲
 * 1- Crear el package json
```
      npm init
```    
 * 2- Instalar nodemon de forma global
```
       npm install nodemon -g
```
 * 3- Crear un scrips en package json para que nodemon se ejecute en cada cambio
```
   "scripts": {
         "start": "nodemon server.js"
      },
 ```
* 4- Para que nodemon se ejecute en cada cambio, ejecutar:
    opcion 1: nodemon server.js
    opcion 2: corriendo el script en package json: npm run start
* 5-Instalar el modulo de express
  
 ``` 
    npm install express
```
* 6- Instalar todas las dependencias que el proyecto requiera.
 ``` 
npm i morgan
npm install --save multer
npm i socket.io 
 ``` 

* 7- Recordá crear el archivo .gitignore para evitar subir contenido innecesario al repositorio.

 ⏯ [¿Cómo crear gitignore?- Tutorial](https://youtu.be/5tP1Ra73c38)
    
 
* 8- Conexión con DB -  Knex + MySql
```
npm i knex
npm i mysql

```
* 9- Recordá crear el archivo de configuración de tu DB -> configDB.js

[Docs- Consultas con knex](https://devhints.io/knex)
