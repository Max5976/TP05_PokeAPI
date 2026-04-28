const input = document.getElementById('inputPokemon');
const btnBuscar = document.getElementById('botonBusqueda');
const resultado = document.getElementById('resultado');
    
async function mostrarPokemon() {
    
    const valorEscrito = document.getElementById('inputPokemon').value;

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valorEscrito}`);
        if (!respuesta.ok) throw new Error('No encontrado');
        
        const data = await respuesta.json();

        const nombre = data.name;
        const imagen = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;
        const tipos = data.types.map(t => t.type.name).join(', ');
        const peso = data.weight / 10;
        const altura = data.height / 10;
        const id = data.id;

        resultado.innerHTML = `
            <div class="card">
                <img src="${imagen}" alt="${nombre}" width="200">
                <h2>${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h2>
                <p><strong>Id:</strong> ${id}</p>
                <p><strong>Tipos:</strong> ${tipos.charAt(0).toUpperCase() + tipos.slice(1)}</p>
                <p><strong>Peso:</strong> ${peso} kg</p>
                <p><strong>Altura:</strong> ${altura} m</p>
            </div>
        `;
        
    } catch (error) {
        resultado.innerHTML = `<p>Pokémon no encontrado</p>`;
    }
}