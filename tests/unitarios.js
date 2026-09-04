// tests/unitarios.js
import { delay, assert, correrPrueba, reset } from './utils.js';

export const testsUnitarios = async () => {
    console.group('%c🧪 TESTS UNITARIOS', 'color: #E91E63; font-size: 14px; font-weight: bold;');
    
    const input = document.getElementById('inputPokemon');
    const btn = document.getElementById('botonBusqueda');
    const resultado = document.getElementById('resultado');

    await correrPrueba('Falla de validación: Input completamente vacío', async () => {
        reset();
        btn.click();
        await delay(50);
        assert(resultado.innerHTML.includes('Por favor, ingresa un Pokémon'), 'No se validó el input vacío');
    });

    await correrPrueba('Falla de validación: Input solo con espacios en blanco', async () => {
        reset();
        input.value = '     ';
        btn.click();
        await delay(50);
        assert(resultado.innerHTML.includes('Por favor, ingresa un Pokémon'), 'No se validó el input con espacios');
    });

    console.groupEnd();
};