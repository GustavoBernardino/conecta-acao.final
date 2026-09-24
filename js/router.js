// router.js
// Lê o hash da URL e decide qual visão desenhar na região
// principal (#app), sem recarregar o documento. O mesmo hash que
// antes só rolava a página (#projetos, #voluntariado...) agora
// identifica a visão ativa.

import {
    renderInicio,
    renderSobre,
    renderProjetos,
    renderComoAjudar,
    renderVoluntariado,
    renderDepoimentos,
    renderContato,
    renderNaoEncontrada,
} from './views.js';
import { montarListaProjetos, renderizarDetalheProjeto } from './projetos.js';
import { inicializarFormulario } from './formulario.js';

const ROTAS = {
    inicio: { titulo: 'Início', renderizar: renderInicio },
    sobre: { titulo: 'Sobre nós', renderizar: renderSobre },
    projetos: { titulo: 'Projetos', renderizar: renderProjetos },
    'como-ajudar': { titulo: 'Como ajudar', renderizar: renderComoAjudar },
    voluntariado: { titulo: 'Seja voluntário', renderizar: renderVoluntariado },
    depoimentos: { titulo: 'Depoimentos', renderizar: renderDepoimentos },
    contato: { titulo: 'Contato', renderizar: renderContato },
};

const PADRAO_DETALHE_PROJETO = /^projeto-(.+)$/;

function obterRotaAtual() {
    const hash = window.location.hash.replace('#', '').trim();
    return hash === '' ? 'inicio' : decodeURIComponent(hash);
}

function focarTituloDaVisao(app) {
    const titulo = app.querySelector('[data-titulo-visao]');
    if (titulo) {
        titulo.focus();
    }
}

function marcarLinkAtivo(rotaAtiva) {
    document.querySelectorAll('header nav a').forEach((link) => {
        const alvo = link.getAttribute('href').replace('#', '');
        link.classList.toggle('ativo', alvo === rotaAtiva);
    });
}

function renderizarRotaAtual() {
    const app = document.getElementById('app');
    if (!app) return;

    const rota = obterRotaAtual();
    const correspondeDetalhe = rota.match(PADRAO_DETALHE_PROJETO);

    if (correspondeDetalhe) {
        renderizarDetalheProjeto(correspondeDetalhe[1], app);
        document.title = 'Conecta Ação · Detalhes do projeto';
        marcarLinkAtivo('projetos');
    } else if (ROTAS[rota]) {
        app.innerHTML = ROTAS[rota].renderizar();
        document.title = `Conecta Ação · ${ROTAS[rota].titulo}`;
        marcarLinkAtivo(rota);

        if (rota === 'projetos') {
            montarListaProjetos(document.getElementById('lista-projetos'));
        }
        if (rota === 'voluntariado') {
            inicializarFormulario();
        }
    } else {
        app.innerHTML = renderNaoEncontrada();
        document.title = 'Conecta Ação · Página não encontrada';
        marcarLinkAtivo('');
    }

    focarTituloDaVisao(app);
    window.scrollTo(0, 0);
}

export function iniciarRoteador() {
    window.addEventListener('hashchange', renderizarRotaAtual);
    renderizarRotaAtual();
}
