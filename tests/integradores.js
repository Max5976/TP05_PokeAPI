// tests/integradores.js
import { delay, assert, correrPrueba, reset } from './utils.js';

export const testsIntegradores = async () => {
    console.group('%c🔗 TESTS INTEGRADORES', 'color: #9C27B0; font-size: 14px; font-weight: bold;');
    
    const input = document.getElementById('inputPokemon');
    const btn = document.getElementById('botonBusqueda');
    const resultado = document.getElementById('resultado');

    await correrPrueba('Renderizado exitoso: Pokémon mockeado', async () => {
        reset();
        window.fetch = async () => ({
            ok: true,
            json: async () => ({
                name: 'ditto', id: 132, weight: 40, height: 3,
                sprites: { front_default: '', other: { 'official-artwork': { front_default: '' } } },
                types: [{ type: { name: 'normal' } }],
                abilities: [{ ability: { name: 'limber' } }]
            })
        });

        input.value = 'ditto';
        btn.click();
        await delay(100);
        
        assert(resultado.innerHTML.includes('ditto'), 'El nombre no se renderizó');
        assert(resultado.querySelector('.bg-normal') !== null, 'La clase de color del tipo no se aplicó');
    });

    await correrPrueba('Manejo de errores: Simulación de error 404', async () => {
        reset();
        window.fetch = async () => ({ ok: false }); 

        input.value = 'pokemoninvento';
        btn.click();
        await delay(100);

        assert(resultado.innerHTML.includes('Pokémon no encontrado'), 'No se manejó el error de la API');
    });

    console.groupEnd();
};