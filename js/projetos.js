// projetos.js
// Guarda os dados dos projetos e gera os cartões (e a visão de
// detalhes) a partir deles, em vez de manter o HTML fixo.

import { ehFavorito, alternarFavorito } from './storage.js';

export const projetos = [
    {
        id: 'futuro-pela-educacao',
        categoria: 'Educação',
        titulo: 'Futuro pela educação',
        descricao: 'O projeto oferece reforço escolar, oficinas de tecnologia e materiais educativos para crianças de comunidades em situação de vulnerabilidade.',
        imagem: 'imagens/estudando_projeto_social.jfif',
        alt: 'Crianças estudando',
        meta: 15000,
        arrecadado: 10000,
    },
    {
        id: 'comunidade-mais-verde',
        categoria: 'Meio ambiente',
        titulo: 'Comunidade mais Verde',
        descricao: 'Uma iniciativa dedicada ao plantio de árvores, à recuperação de áreas públicas e à conscientização ambiental dos moradores.',
        imagem: 'imagens/voluntarios_plantar_arvore.jfif',
        alt: 'Voluntarios plantando árvore',
        meta: 8000,
        arrecadado: 4800,
    },
    {
        id: 'alimento-que-transforma',
        categoria: 'Combate à fome',
        titulo: 'Alimento que transforma',
        descricao: 'Arrecadamos alimentos e montamos cestas básicas para famílias que enfrentam situações de insegurança alimentar.',
        imagem: 'imagens/doacao_de_comida.jfif',
        alt: 'Voluntarios doando comida',
        meta: 12000,
        arrecadado: 9600,
    },
];

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcularPorcentagem(projeto) {
    if (!projeto.meta) return 0;
    const bruta = (projeto.arrecadado / projeto.meta) * 100;
    return Math.min(100, Math.round(bruta));
}

function atualizarBotaoFavorito(botao, estaFavorito) {
    botao.textContent = estaFavorito ? '★ Favorito' : '☆ Favoritar';
    botao.classList.toggle('ativo', estaFavorito);
    botao.setAttribute('aria-pressed', String(estaFavorito));
    botao.setAttribute('aria-label', `${estaFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'} o projeto ${botao.dataset.projeto}`);
}

function criarCard(projeto) {
    const artigo = document.createElement('article');
    artigo.className = 'projetos-card';

    const img = document.createElement('img');
    img.src = projeto.imagem;
    img.alt = projeto.alt;
    artigo.appendChild(img);

    const conteudo = document.createElement('div');
    conteudo.className = 'projeto_conteudo';

    const categoriaEl = document.createElement('span');
    categoriaEl.className = 'categoria';
    categoriaEl.textContent = projeto.categoria; // texto puro, nunca HTML
    conteudo.appendChild(categoriaEl);

    const tituloEl = document.createElement('h2');
    tituloEl.textContent = projeto.titulo;
    conteudo.appendChild(tituloEl);

    const descricaoEl = document.createElement('p');
    descricaoEl.textContent = projeto.descricao;
    conteudo.appendChild(descricaoEl);

    const valoresEl = document.createElement('div');
    valoresEl.className = 'valores';

    const metaSpan = document.createElement('span');
    const metaForte = document.createElement('strong');
    metaForte.textContent = 'Meta:';
    metaSpan.appendChild(metaForte);
    metaSpan.append(` ${formatarMoeda(projeto.meta)}`);

    const arrecadadoSpan = document.createElement('span');
    const arrecadadoForte = document.createElement('strong');
    arrecadadoForte.textContent = 'Arrecadado:';
    arrecadadoSpan.appendChild(arrecadadoForte);
    arrecadadoSpan.append(` ${formatarMoeda(projeto.arrecadado)}`);

    valoresEl.appendChild(metaSpan);
    valoresEl.appendChild(arrecadadoSpan);
    conteudo.appendChild(valoresEl);

    const porcentagem = calcularPorcentagem(projeto);

    const progressoEl = document.createElement('div');
    progressoEl.className = 'progresso';
    const barraEl = document.createElement('div');
    barraEl.className = 'barra';
    barraEl.style.width = `${porcentagem}%`;
    progressoEl.appendChild(barraEl);
    conteudo.appendChild(progressoEl);

    const rotuloEl = document.createElement('span');
    rotuloEl.className = 'porcentagem';
    rotuloEl.textContent = `${porcentagem}% arrecadado`;
    conteudo.appendChild(rotuloEl);

    const acoesEl = document.createElement('div');
    acoesEl.className = 'card-acoes';

    const favoritoBtn = document.createElement('button');
    favoritoBtn.type = 'button';
    favoritoBtn.className = 'botao-favorito';
    favoritoBtn.dataset.projeto = projeto.titulo;
    atualizarBotaoFavorito(favoritoBtn, ehFavorito(projeto.id));
    favoritoBtn.addEventListener('click', () => {
        const estaFavorito = alternarFavorito(projeto.id);
        atualizarBotaoFavorito(favoritoBtn, estaFavorito);
    });
    acoesEl.appendChild(favoritoBtn);

    const linkDetalhe = document.createElement('a');
    linkDetalhe.className = 'botao_projeto';
    linkDetalhe.href = `#projeto-${projeto.id}`;
    linkDetalhe.textContent = 'Conhecer projeto';
    acoesEl.appendChild(linkDetalhe);

    conteudo.appendChild(acoesEl);
    artigo.appendChild(conteudo);
    return artigo;
}

export function montarListaProjetos(container) {
    if (!container) return;
    container.innerHTML = '';

    if (projetos.length === 0) {
        const vazio = document.createElement('p');
        vazio.className = 'projetos-vazio';
        vazio.textContent = 'Nenhum projeto disponível no momento. Volte em breve para conferir novidades.';
        container.appendChild(vazio);
        return;
    }

    projetos.forEach((projeto) => {
        container.appendChild(criarCard(projeto));
    });
}

export function buscarProjetoPorId(id) {
    return projetos.find((projeto) => projeto.id === id) || null;
}

export function renderizarDetalheProjeto(id, container) {
    const projeto = buscarProjetoPorId(id);

    container.innerHTML = '';

    const titulo = document.createElement('h1');
    titulo.className = 'headers';
    titulo.setAttribute('data-titulo-visao', '');
    titulo.setAttribute('tabindex', '-1');

    if (!projeto) {
        titulo.textContent = 'Projeto não encontrado';
        container.appendChild(titulo);

        const secao = document.createElement('section');
        secao.className = 'pagina-contato';

        const paragrafo = document.createElement('p');
        paragrafo.textContent = 'Não encontramos o projeto solicitado. Ele pode ter sido removido ou o link está incorreto.';
        secao.appendChild(paragrafo);

        const voltar = document.createElement('a');
        voltar.href = '#projetos';
        voltar.className = 'botao_projeto';
        voltar.textContent = 'Voltar aos projetos';
        secao.appendChild(voltar);

        container.appendChild(secao);
        return;
    }

    titulo.textContent = projeto.titulo;
    container.appendChild(titulo);

    const secao = document.createElement('section');
    secao.className = 'projeto-detalhe';

    const img = document.createElement('img');
    img.src = projeto.imagem;
    img.alt = projeto.alt;
    secao.appendChild(img);

    const conteudo = document.createElement('div');
    conteudo.className = 'projeto-detalhe-conteudo';

    const categoriaEl = document.createElement('span');
    categoriaEl.className = 'categoria';
    categoriaEl.textContent = projeto.categoria;
    conteudo.appendChild(categoriaEl);

    const descricaoEl = document.createElement('p');
    descricaoEl.textContent = projeto.descricao;
    conteudo.appendChild(descricaoEl);

    const porcentagem = calcularPorcentagem(projeto);

    const valoresEl = document.createElement('div');
    valoresEl.className = 'valores';
    valoresEl.innerHTML = `<span><strong>Meta:</strong> ${formatarMoeda(projeto.meta)}</span><span><strong>Arrecadado:</strong> ${formatarMoeda(projeto.arrecadado)}</span>`;
    conteudo.appendChild(valoresEl);

    const progressoEl = document.createElement('div');
    progressoEl.className = 'progresso';
    const barraEl = document.createElement('div');
    barraEl.className = 'barra';
    barraEl.style.width = `${porcentagem}%`;
    progressoEl.appendChild(barraEl);
    conteudo.appendChild(progressoEl);

    const rotuloEl = document.createElement('span');
    rotuloEl.className = 'porcentagem';
    rotuloEl.textContent = `${porcentagem}% arrecadado`;
    conteudo.appendChild(rotuloEl);

    const voltar = document.createElement('a');
    voltar.href = '#projetos';
    voltar.className = 'botao_projeto';
    voltar.textContent = 'Voltar aos projetos';
    conteudo.appendChild(voltar);

    secao.appendChild(conteudo);
    container.appendChild(secao);
}
