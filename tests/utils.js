// tests/utils.js
export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const assert = (condicion, mensaje) => { 
    if (!condicion) throw new Error(mensaje); 
};

export const correrPrueba = async (nombre, funcionPrueba) => {
    try {
        await funcionPrueba();
        console.log(`%c✔ ${nombre}`, 'color: #4CAF50;');
    } catch (error) {
        console.groupCollapsed(`%c✘ ${nombre}`, 'color: #F44336; font-weight: bold;');
        console.error(error.message);
        console.trace();
        console.groupEnd();
    }
};

export const fetchOriginal = window.fetch;

export const reset = () => {
    document.getElementById('inputPokemon').value = '';
    document.getElementById('resultado').innerHTML = '';
    window.fetch = fetchOriginal;
};