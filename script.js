const input = document.getElementById('inputPokemon');
const btnBuscar = document.getElementById('botonBusqueda');
const resultado = document.getElementById('resultado');

// Eventos separados del HTML
btnBuscar.addEventListener('click', mostrarPokemon);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') mostrarPokemon();
});
    
async function mostrarPokemon() {
    const valorEscrito = input.value.trim().toLowerCase();

    // Validación
    if (!valorEscrito) {
        resultado.innerHTML = `<div class="error"><p>Por favor, ingresa un Pokémon o ID.</p></div>`;
        return;
    }

    // Estado de carga
    resultado.innerHTML = `<div class="loading"><p>Buscando...</p></div>`;

    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valorEscrito}`);
        if (!respuesta.ok) throw new Error('No encontrado');
        
        const data = await respuesta.json();

        // Extracción de datos
        const nombre = data.name;
        const imagen = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;
        const id = data.id;
        const peso = data.weight / 10;
        const altura = data.height / 10;
        const tipoPrincipal = data.types[0].type.name;

        // Generación de etiquetas HTML para tipos y habilidades
        const tiposHtml = data.types.map(t => 
            `<span class="tipo ${t.type.name}">${t.type.name}</span>`
        ).join('');

        const habilidadesHtml = data.abilities.map(a => 
            `<span class="ability">${a.ability.name.replace('-', ' ')}</span>`
        ).join('');

        // Renderizado final
        resultado.innerHTML = `
            <div class="card bg-${tipoPrincipal}">
                <div class="card-hero">
                    <img src="${imagen}" alt="${nombre}">
                </div>
                <div class="card-body">
                    <h2>${nombre} #${id}</h2>
                    <div class="tipos">
                        ${tiposHtml}
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-label">Peso</div>
                            <div class="stat-value">${peso} kg</div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">Altura</div>
                            <div class="stat-value">${altura} m</div>
                        </div>
                    </div>
                    <div class="abilities">
                        <span class="stat-label">Habilidades</span>
                        <div class="ability-list">
                            ${habilidadesHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
    } catch (error) {
        resultado.innerHTML = `<div class="error"><p>Pokémon no encontrado.</p></div>`;
    }
}