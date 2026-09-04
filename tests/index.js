// tests/index.js
import { testsUnitarios } from './unitarios.js';
import { testsIntegradores } from './integradores.js';
import { testsE2E } from './e2e.js';
import { reset } from './utils.js';

// Retrasamos el inicio para asegurar que tu app.js principal ya cargó
setTimeout(async () => {
    console.clear(); 
    console.log("%c🚀 INICIANDO BATERÍA DE PRUEBAS...", "color: #2196F3; font-weight: bold; font-size: 16px;");
    
    await testsUnitarios();
    await testsIntegradores();
    await testsE2E();
    
    reset(); 
    console.log("%c🏁 TODAS LAS PRUEBAS FINALIZADAS", "color: #2196F3; font-weight: bold; font-size: 16px;");
}, 1000);