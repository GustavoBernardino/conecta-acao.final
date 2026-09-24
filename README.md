# Conecta Ação

A Conecta Ação é um projeto acadêmico de desenvolvimento front-end que apresenta uma plataforma fictícia para divulgar iniciativas sociais e incentivar a participação de voluntários. Os projetos, nomes, depoimentos, valores de arrecadação e contatos exibidos são exemplos ilustrativos.

- **Site publicado:** https://gustavobernardino.github.io/conecta-acao.final/
- **Repositório:** https://github.com/GustavoBernardino/conecta-acao.final
- **Autor:** Gustavo Bernardino

## Tecnologias e estrutura

O projeto usa HTML, CSS e JavaScript em módulos, sem dependências externas e sem etapa de compilação.

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página inicial e estrutura comum da aplicação |
| `css/styles.css` | Estilos e regras de responsividade |
| `js/` | Rotas, conteúdo das páginas, projetos, formulário e favoritos |
| `imagens/` | Fotos e imagens usadas nas páginas |
| `fontes/` | Fontes locais usadas pelo CSS |

## Como executar no computador

1. Baixe o repositório em **Code > Download ZIP** no GitHub e extraia os arquivos. Se você usa GitHub Desktop, pode escolher **Code > Open with GitHub Desktop** para clonar o repositório.
2. Abra a pasta que contém `index.html` no VS Code.
3. Inicie um servidor local, por exemplo com a extensão Live Server, e abra `index.html` por esse servidor.
4. Navegue pelo menu para conferir as páginas. Abrir o HTML diretamente pelo caminho `file://` pode impedir o carregamento dos módulos JavaScript.

## O que o site faz

- Navega entre Início, Sobre nós, Projetos, Como ajudar, Voluntariado, Depoimentos e Contato sem recarregar a página.
- Mostra cartões e detalhes de três projetos sociais ilustrativos.
- Permite marcar projetos como favoritos. Apenas os identificadores dos favoritos são guardados no `localStorage` do próprio navegador.
- Valida o formulário de voluntariado e mostra mensagens de erro ou de confirmação. **O formulário é uma demonstração: não envia nem armazena dados pessoais em um servidor.**
- Adapta o layout a telas de diferentes tamanhos.

## Como testar

1. Abra cada item do menu e os detalhes de cada projeto. Verifique se textos, imagens e estilos carregam.
2. Na página de Projetos, marque um favorito, atualize a página e confira se ele permanece marcado. Desmarque-o para conferir a ação inversa.
3. Na página de Voluntariado, tente enviar o formulário vazio e verifique se os erros aparecem junto aos campos. Depois preencha os campos obrigatórios com dados fictícios e confira a mensagem de demonstração.
4. Navegue sem mouse usando Tab, Shift+Tab, Enter e Espaço. O foco deve permanecer visível nos links, botões e campos.
5. Teste em largura de celular e com zoom de 200%, verificando se não há conteúdo cortado, sobreposto ou rolagem horizontal indevida.
6. Execute uma auditoria de acessibilidade no Lighthouse do navegador e revise os problemas apontados. Uma auditoria automática não comprova, sozinha, conformidade integral com a WCAG 2.1 nível AA.

## Publicação e manutenção

O site está publicado pelo GitHub Pages a partir da branch `main` e da pasta `/ (root)`. Para configurar novamente: abra **Settings > Pages**, selecione **Deploy from a branch**, escolha `main` e `/ (root)` e salve.

Para uma alteração futura, crie uma branch no GitHub Desktop, faça commits com mensagens claras, publique a branch e abra um pull request para `main`. Revise as mudanças, faça o merge e atualize a `main` local com **Fetch origin** e **Pull origin**. Após um novo commit em `main`, confira a publicação na aba **Actions** e teste o endereço público.

## Acessibilidade e limitações

Foram implementados rótulos nos campos, mensagens de erro textuais, descrições de imagens, foco visível, link para pular ao conteúdo e melhorias de contraste. A verificação completa de conformidade WCAG 2.1 AA ainda depende de testes manuais e com tecnologias assistivas. O formulário não possui serviço de envio, e os dados e contatos da organização são fictícios.

## Imagens e créditos

As imagens estão na pasta `imagens/`. Antes de usar este projeto fora do contexto acadêmico, confirme a origem, a licença e a atribuição necessária de cada uma. Não há informação suficiente nos arquivos atuais para atribuir autoria com segurança.

Para mostrar o projeto no README, faça uma captura da página inicial, salve como `imagens/captura-inicio.png` e adicione uma referência a essa imagem nesta seção. Também é possível adicionar capturas das páginas de Projetos e Voluntariado.
