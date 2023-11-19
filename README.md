# Desafio Backend con NodeJS 
## _Autores_
## Bernardo Hernandez and Oscar Jurado

Este projecto fue construido bajo el framework express.

- Node 18
- express 4.18
- faker para generar data de prueba.

## Features

Este proyecto contiene dos rutas products y categories de un e-comerce 
se implemento Single responsability, adicional se uso middleware para la validacion de errores, 
Joi para validar data de entrada y parametros de las peticiones, errores personalizados con Boom

## Installation

descargar el proyecto, ingresar al directorio "TGL-RetoNodeJs-master" ejecutar npm install 
correr el comando "docker compose up" 

## Pruebas

probar en la ruta localhost:3000/api/v1/
products: lista los productos
products/:id busca por id
products/:id metodo Delete elimina si existe el registro con el id definido
products/:id actualiza el producto por id
products/ al invocar con el metodo Post y con un body correcto crea el producto.
