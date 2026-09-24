// storage.js
// Concentra toda a leitura e gravação do localStorage do projeto.
// Não guarda dados pessoais de voluntários: apenas os IDs dos
// projetos marcados como favoritos, algo que só faz sentido no
// navegador de quem está usando o site.

const CHAVE_FAVORITOS = 'conectaAcao:projetosFavoritos';

function lerFavoritos() {
    try {
        const bruto = window.localStorage.getItem(CHAVE_FAVORITOS);
        if (!bruto) return [];
        const lista = JSON.parse(bruto);
        return Array.isArray(lista) ? lista : [];
    } catch (erro) {
        // Conteúdo ausente, corrompido ou localStorage indisponível:
        // tratamos como "sem favoritos" em vez de quebrar a página.
        console.warn('Não foi possível ler os favoritos salvos:', erro);
        return [];
    }
}

function salvarFavoritos(lista) {
    try {
        window.localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(lista));
    } catch (erro) {
        console.warn('Não foi possível salvar os favoritos:', erro);
    }
}

export function ehFavorito(idProjeto) {
    return lerFavoritos().includes(idProjeto);
}

export function alternarFavorito(idProjeto) {
    const favoritos = lerFavoritos();
    const indice = favoritos.indexOf(idProjeto);

    if (indice === -1) {
        favoritos.push(idProjeto);
    } else {
        favoritos.splice(indice, 1);
    }

    salvarFavoritos(favoritos);
    return ehFavorito(idProjeto);
}

export function listarFavoritos() {
    return lerFavoritos();
}
