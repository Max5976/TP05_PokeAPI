
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const pokemonRoutes = require('./pokeapi/pokemonRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', pokemonRoutes);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
    console.log('Documentación: http://localhost:3000/api-docs');
});
