# Aplicaciones Interactivas

# Back-End

## Primeros Pasos
Nos ubicamos en la carpeta BE y corremos el siguiente comando para instalar las dependencias

```
npm install
```
## Creacion de la Base de Datos

Dentro de la capeta BD hay un archivo SQL, ejecutelo para generar la base de datos

## Ajuste del Config

En la carpeta BE Hay una carpeta llamada config. Dentro esta el config.json
Modifique la configuracion de la base de datos con los parametros correctos

## Llenado de la Base de Datos

Luego de ajustar el archivo config, abra una consola en la carpeta BE y corra el siguiente comando

```
npx sequelize-cli db:seed:all
```

Este llenara las tablas de blood_type y vaccine_calendar

## Una vez finalizados estos pasos puede iniciar el back end de la aplicacion con el siguiente comando

```
npm start
```
# Front-End

## Primeros Pasos
Nos ubicamos en la carpeta UI y corremos el siguiente comando para instalar las dependencias

```
npm install
```

## Configuro la ruta del Back End
Dentro de la aplicacion del Font End tenemos un archivo ubicado en Soure -> Services -> URLService.js
Dentro de este archivo debemos modificar la baseURL para que coincida con el Back End

## Una vez finalizados estos pasos puede iniciar el front end de la aplicacion con el siguiente comando

```
npm start
```




