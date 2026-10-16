const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function consultarPokemon(nombre) {
    const respuesta = await fetch(
        `${BASE_URL}/${encodeURIComponent(nombre) .toLowerCase()}`
    );

    if (respuesta.status === 404) {
        const error = new Error('Pokémon no encontrado');
        error.status = 404;
        throw error;
    }

    if (!respuesta.ok) {
        const error = new Error('Error al consultar PokéAPI');
        error.status = 502;
        throw error;
    }

    return await respuesta.json();
}

async function obtenerPokemon(nombre) {
    const data = await consultarPokemon(nombre);

    return {
        id: data.id,
        nombre: data.name,
        imagen:
            data.sprites.other['official-artwork'].front_default ||
            data.sprites.front_default,
        tipos: data.types.map(item => item.type.name),
        peso: data.weight / 10,
        altura: data.height / 10
    };
}

async function obtenerGeneracion(nombre) {
    const data = await consultarPokemon(nombre);
    const respuesta = await fetch(data.species.url);

    if (!respuesta.ok) {
        const error = new Error('No se pudo obtener la especie');
        error.status = 502;
        throw error;
    }

    const especie = await respuesta.json();

    return {
        pokemon: data.name,
        generacion: especie.generation.name
    };
}

async function obtenerEstadisticas(nombre) {
    const data = await consultarPokemon(nombre);

    return {
        pokemon: data.name,
        estadisticas: data.stats.map(item => ({
            nombre: item.stat.name,
            valor: item.base_stat
        }))
    };
}

async function obtenerHabilidades(nombre) {
    const data = await consultarPokemon(nombre);

    return {
        pokemon: data.name,
        habilidades: data.abilities.map(item => ({
            nombre: item.ability.name,
            oculta: item.is_hidden
        }))
    };
}

async function obtenerMovimientos(nombre) {
    const data = await consultarPokemon(nombre);

    return {
        pokemon: data.name,
        cantidad: data.moves.length,
        movimientos: data.moves.map(item => item.move.name)
    };
}

async function obtenerExperiencia(nombre) {
    const data = await consultarPokemon(nombre);

    return {
        pokemon: data.name,
        experienciaBase: data.base_experience
    };
}

module.exports = {
    obtenerPokemon,
    obtenerGeneracion,
    obtenerEstadisticas,
    obtenerHabilidades,
    obtenerMovimientos,
    obtenerExperiencia
};
