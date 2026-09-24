# Conecta Ação

Projeto acadêmico de front-end que apresenta uma organização social fictícia, seus projetos e formas de participação. Os nomes, depoimentos, valores de arrecadação e dados de contato são ilustrativos.

## Tecnologias

HTML, CSS e JavaScript em módulos, sem dependências e sem etapa de build.

## Como executar

Abra a pasta do projeto no VS Code e use o Live Server no arquivo `index.html`, que fica na raiz. Os módulos JavaScript precisam de um servidor local: abrir o arquivo diretamente com `file://` pode impedir seu carregamento.

## Funcionalidades

- Navegação em páginas internas por hash, sem recarregar a página.
- Cartões e detalhes dos projetos; favoritos salvos apenas no navegador com localStorage.
- Formulário de voluntariado com validação e resposta de demonstração. **Nenhum dado é enviado a um servidor ou cadastrado de verdade.**
- Layout adaptável a telas pequenas.

## Acessibilidade

Foram revisados títulos, rótulos, texto alternativo, mensagens de erro, foco visível e contrastes principais. A revisão por código não substitui testes completos de WCAG 2.1 AA. Antes da entrega, teste a navegação por teclado (Tab, Shift+Tab, Enter e Espaço), o zoom de 200%, o formulário e uma auditoria Lighthouse no navegador.

## Publicação

No GitHub, abra Settings > Pages, selecione Deploy from a branch, branch `main` e pasta `/ (root)`. Salve e aguarde o endereço público aparecer. O arquivo `index.html` e as pastas `css`, `js`, `fontes` e `imagens` precisam estar na raiz do repositório.

Site publicado: adicione aqui a URL exibida em Settings > Pages após publicar.

## Manutenção

Faça mudanças em uma branch, registre commits com descrições claras, abra um pull request, revise e mescle em `main`. Depois, atualize `main` no GitHub Desktop com Fetch/Pull. Novos commits na branch de publicação atualizarão o site.

## Limitações e créditos

O formulário é demonstrativo. Os links de redes sociais foram retirados porque não há perfis reais cadastrados. Revise a licença e o crédito de cada imagem antes de disponibilizar publicamente. Desenvolvido por Gustavo Bernardino para atividade acadêmica.
