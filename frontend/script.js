
async function mostrarPokemon() {
    const input = document.getElementById('inputPokemon');
    const resultado = document.getElementById('resultado');
    const valorEscrito = input.value.trim().toLowerCase();

    try {
        const respuesta = await fetch(
            `http://localhost:3000/pokemon/${encodeURIComponent(valorEscrito)}`
        );

        if (!respuesta.ok) throw new Error('No encontrado');

        const data = await respuesta.json();

        const respuestaGeneracion = await fetch(
            `http://localhost:3000/pokemon/${encodeURIComponent(valorEscrito)}/generacion`
        );

        if (!respuestaGeneracion.ok) throw new Error('Error al obtener generación');

        const dataGeneracion = await respuestaGeneracion.json();

        const nombre = data.nombre;
        const imagen = data.imagen;
        const tipos = data.tipos.join(', ');
        const peso = data.peso;
        const altura = data.altura;
        const id = data.id;
        const generacion = dataGeneracion.generacion;

        resultado.innerHTML = `
            <h2>${nombre}</h2>
            <img src="${imagen}" alt="${nombre}">
            <p>ID: ${id}</p>
            <p>Tipos: ${tipos}</p>
            <p>Peso: ${peso} kg</p>
            <p>Altura: ${altura} m</p>
            <p>Generación: ${generacion}</p>
        `;
    } catch (error) {
        resultado.innerHTML = '<p>Pokémon no encontrado</p>';
    }
}
