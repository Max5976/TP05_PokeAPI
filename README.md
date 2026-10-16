# PokeMax

## Una mini Pokédex web que permite buscar Pokémon por nombre o ID, desarrollada con HTML, CSS y JavaScript.

Usamos form con onsumbit que llega a un método del script

Font De Videojuego Retro, Oscuro

Usamos el endpoint de Pokemon y con esos datos hicimos un innerHtml para llevarlo a lo visual
   
Usamos respuesta.ok para ver si la traida de la API funcionó (Estado Html entre 200-299), si no, se muestra un error

La imágen se intenta mostrar con el artwork oficial de alta resolución y si no está disponible, se usa el sprite clásico

Cambiamos los hectogramos y los decímetros a kg y metros dividiendo por 10

Si no hay nada en la búsqueda, devuelve error por el try catch

## TP14 — Nuevos cambios

Se han agregado nuevos cambios en ésta etapa:

- **Reediseño:** IA utilizada para reestructurar el programa para incluir app.js, node_modules (con el .gitignore para sofocarlo obviamente), entre otros.
- **Nuevos endpoints:** IA utilizada para ayudar con la agregación de más endpoints para poder adaptar ésto a los prerrequisitos del trabajo práctico.
- **División:** División entre frontend (html, style y script) y backend (toda la lógica para "adaptar" el programa a swagger). Uso de CORS para comunicación.
- **Live Server:** Uso de la extensión "live server" para correr el frontend con el backend fácilmente.
- **Apertura con npm start:** El programa ahora se abre con npm start que ejecuta "node --use-system-ca app.js". La opción --use-system-ca permite que Node.js use los certificados confiables de Windows para validar las conexiones HTTPS. Esto es necesario porque, al ejecutar node app.js sin esa opción, la conexión con PokéAPI falla por problemas de confianza con el certificado SSL/TLS. Al usar éste comando aparece la ruta en la que se ejecuta y la ruta para probar con swagger.

## Instalación de dependencias

Para instalar las librerías necesarias, ejecutar:

**npm install**

Librerías utilizadas

- **Express:** creación y gestión de rutas y endpoints del backend.
- **CORS:** permite la comunicación entre el frontend y el backend cuando se ejecutan en distintos orígenes.
- **Swagger:** documentación de la API y visualización de sus endpoints.
- **swagger-autogen:** generación automática de la documentación de Swagger, si está instalado en el proyecto.
