const express = require('express');
const router = express.Router();
const pokemonController = require('./pokemonController');

/*
#swagger.tags = ['Pokémon']
#swagger.summary = 'Obtener información general de un Pokémon'
#swagger.parameters['nombre'] = {
    in: 'path',
    description: 'Nombre o ID del Pokémon',
    required: true,
    type: 'string'
}
#swagger.responses[200] = { description: 'Datos obtenidos correctamente' }
#swagger.responses[404] = { description: 'Pokémon no encontrado' }
#swagger.responses[502] = { description: 'Error al consultar PokéAPI' }
*/
router.get('/pokemon/:nombre', pokemonController.buscarPokemon);

/*
#swagger.tags = ['Pokémon']
#swagger.summary = 'Obtener la generación de un Pokémon'
#swagger.parameters['nombre'] = {
    in: 'path',
    description: 'Nombre o ID del Pokémon',
    required: true,
    type: 'string'
}
#swagger.responses[200] = { description: 'Generación obtenida correctamente' }
#swagger.responses[404] = { description: 'Pokémon no encontrado' }
#swagger.responses[502] = { description: 'Error al consultar PokéAPI' }
*/
router.get('/pokemon/:nombre/generacion', pokemonController.buscarGeneracion);

/*
#swagger.tags = ['Pokémon']
#swagger.summary = 'Obtener las estadísticas base'
#swagger.parameters['nombre'] = {
    in: 'path',
    description: 'Nombre o ID del Pokémon',
    required: true,
    type: 'string'
}
#swagger.responses[200] = { description: 'Estadísticas obtenidas correctamente' }
#swagger.responses[404] = { description: 'Pokémon no encontrado' }
#swagger.responses[502] = { description: 'Error al consultar PokéAPI' }
*/
router.get('/pokemon/:nombre/estadisticas', pokemonController.buscarEstadisticas);

/*
#swagger.tags = ['Pokémon']
#swagger.summary = 'Obtener las habilidades'
#swagger.parameters['nombre'] = {
    in: 'path',
    description: 'Nombre o ID del Pokémon',
    required: true,
    type: 'string'
}
#swagger.responses[200] = { description: 'Habilidades obtenidas correctamente' }
#swagger.responses[404] = { description: 'Pokémon no encontrado' }
#swagger.responses[502] = { description: 'Error al consultar PokéAPI' }
*/
router.get('/pokemon/:nombre/habilidades', pokemonController.buscarHabilidades);

/*
#swagger.tags = ['Pokémon']
#swagger.summary = 'Obtener los movimientos'
#swagger.parameters['nombre'] = {
    in: 'path',
    description: 'Nombre o ID del Pokémon',
    required: true,
    type: 'string'
}
#swagger.responses[200] = { description: 'Movimientos obtenidos correctamente' }
#swagger.responses[404] = { description: 'Pokémon no encontrado' }
#swagger.responses[502] = { description: 'Error al consultar PokéAPI' }
*/
router.get('/pokemon/:nombre/movimientos', pokemonController.buscarMovimientos);

/*
#swagger.tags = ['Pokémon']
#swagger.summary = 'Obtener la experiencia base'
#swagger.parameters['nombre'] = {
    in: 'path',
    description: 'Nombre o ID del Pokémon',
    required: true,
    type: 'string'
}
#swagger.responses[200] = { description: 'Experiencia obtenida correctamente' }
#swagger.responses[404] = { description: 'Pokémon no encontrado' }
#swagger.responses[502] = { description: 'Error al consultar PokéAPI' }
*/
router.get('/pokemon/:nombre/experiencia', pokemonController.buscarExperiencia);

module.exports = router;
