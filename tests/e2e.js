// tests/e2e.js
import { delay, assert, correrPrueba, reset } from './utils.js';

export const testsE2E = async () => {
    console.group('%c🌐 TESTS PUNTA A PUNTA (E2E)', 'color: #FF9800; font-size: 14px; font-weight: bold;');
    
    const input = document.getElementById('inputPokemon');
    const btn = document.getElementById('botonBusqueda');
    const resultado = document.getElementById('resultado');

    await correrPrueba('Búsqueda real exitosa por nombre (Snorlax)', async () => {
        reset();
        input.value = 'snorlax';
        btn.click();
        
        assert(resultado.innerHTML.includes('Buscando...'), 'No mostró el loader');
        
        await delay(1500); 
        assert(resultado.innerHTML.includes('snorlax'), 'La API real no devolvió a Snorlax');
        assert(document.querySelector('.bg-normal') !== null, 'Fallo en la estructura CSS real');
    });

    await correrPrueba('Búsqueda real ejecutada con la tecla Enter', async () => {
        reset();
        input.value = 'gengar';
        
        const eventoEnter = new KeyboardEvent('keypress', { key: 'Enter' });
        input.dispatchEvent(eventoEnter);
        
        await delay(1500);
        assert(resultado.innerHTML.includes('gengar'), 'El evento Enter no disparó la petición real');
    });

    console.groupEnd();
};