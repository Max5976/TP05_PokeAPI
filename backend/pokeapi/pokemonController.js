const pokemonService = require('./pokemonService');

function crearControlador(metodoService) {
    return async (req, res) => {
        try {
            const resultado = await metodoService(req.params.nombre);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(error.status || 500).json({
                error: error.message || 'Error interno del servidor'
            });
        }
    };
}

const buscarPokemon = crearControlador(
    pokemonService.obtenerPokemon
);

const buscarGeneracion = crearControlador(
    pokemonService.obtenerGeneracion
);

const buscarEstadisticas = crearControlador(
    pokemonService.obtenerEstadisticas
);

const buscarHabilidades = crearControlador(
    pokemonService.obtenerHabilidades
);

const buscarMovimientos = crearControlador(
    pokemonService.obtenerMovimientos
);

const buscarExperiencia = crearControlador(
    pokemonService.obtenerExperiencia
);

module.exports = {
    buscarPokemon,
    buscarGeneracion,
    buscarEstadisticas,
    buscarHabilidades,
    buscarMovimientos,
    buscarExperiencia
};
