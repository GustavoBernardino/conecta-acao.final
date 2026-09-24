// main.js
// Ponto de entrada: só inicia o roteador quando o documento
// estiver pronto.

import { iniciarRoteador } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    iniciarRoteador();
});
