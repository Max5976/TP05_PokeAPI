# PokeMax

## Una mini Pokédex web que permite buscar Pokémon por nombre o ID, desarrollada con HTML, CSS y JavaScript.

Usamos form con onsumbit que llega a un método del script

Font De Videojuego Retro, Oscuro

Usamos el endpoint de Pokemon y con esos datos hicimos un innerHtml para llevarlo a lo visual
   
Usamos respuesta.ok para ver si la traida de la API funcionó (Estado Html entre 200-299), si no, se muestra un error

La imágen se intenta mostrar con el artwork oficial de alta resolución y si no está disponible, se usa el sprite clásico

Cambiamos los hectogramos y los decímetros a kg y metros dividiendo por 10

Si no hay nada en la búsqueda, devuelve error por el try catch

# Tp 14

Se han agregado nuevos cambios en ésta etapa: 

ListIA utilizada para ayudar con la agregación de más endpoints para poder adaptar ésto a los prerrequisitos del trabajo práctico

Uso de live server para correr el frontend con el backend fácilmente

Se abre con npm start que ejecuta "node --use-system-ca app.js". La opción --use-system-ca permite que Node.js use los certificados confiables de Windows para validar las conexiones HTTPS. Esto es necesario porque, al ejecutar node app.js sin esa opción, la conexión con PokéAPI falla por problemas de confianza con el certificado SSL/TLS.