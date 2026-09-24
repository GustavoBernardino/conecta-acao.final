// main.js
// Ponto de entrada: só inicia o roteador quando o documento
// estiver pronto.

import { iniciarRoteador } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    iniciarRoteador();
    document.querySelector('.pular-conteudo')?.addEventListener('click', (evento) => {
        evento.preventDefault();
        document.getElementById('app')?.focus();
    });
});
