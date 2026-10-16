
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Pokémon API',
        description: 'API para consultar información de Pokémon',
        version: '1.0.0'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./pokeapi/pokemonRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
