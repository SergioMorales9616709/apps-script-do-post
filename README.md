# apps-script-do-post
## Ejemplo de Apps Script para Google sheets
Ejemplo que permite hacer una solicitud post hacia un endpoint de un google sheet y permite ingresar los datos en una hoja determinada del archivo.

El ejemplo recibe una solicitud POST con 4 campos:
1. email - correo a guardar en la hoja
1. message - un mensaje que se guardara en la hoja
1. phone - número de teléfono 
1. date - fecha de la solicitud

El formato de la hoja es el siguiente:

|Fecha|Email|Teléfono|Mensaje|
|--|--|--|--|
|30/10/2023|fake@test.net|18325444|texto|


### Observaciones
Luego de la inserción de datos se actualiza la fila de datos insertada para limpiar el formato y que este no herede el formato de los títulos.
