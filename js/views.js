// views.js
// Cada função devolve o HTML de uma visão, com o mesmo conteúdo e
// as mesmas classes do site original. O elemento com
// [data-titulo-visao] recebe foco ao trocar de rota, para quem
// navega pelo teclado ou usa leitor de tela.

export function renderInicio() {
    return `
        <div class="conteudo">
            <img src="imagens/voluntariados.jfif" alt="Pessoas voluntárias ajudando em uma comunidade">
            <div class="texto">
                <h1 class="titulo" data-titulo-visao tabindex="-1">Pequenas ações podem transformar comunidades inteiras</h1>
                <p>Na Conecta Ação, unimos pessoas dispostas a ajudar com projetos sociais que precisam de apoio. Encontre uma causa, participe como voluntário e faça parte dessa transformação.</p>
                <a href="#projetos" class="botao">Conheça nossos projetos<span>→</span></a>
                <a href="#voluntariado" class="botao">Seja um voluntário</a>
                <ul class="estatisticas">
                    <li>
                        <div class="icone" aria-hidden="true">👥</div>
                        <div class="informacao">
                            <span class="numero">+1.200</span>
                            <span class="descricao">voluntários</span>
                        </div>
                    </li>
                    <li>
                        <div class="icone" aria-hidden="true">📋</div>
                        <div class="informacao">
                            <span class="numero">25</span>
                            <span class="descricao">projetos realizados</span>
                        </div>
                    </li>
                    <li>
                        <div class="icone" aria-hidden="true">📍</div>
                        <div class="informacao">
                            <span class="numero">8</span>
                            <span class="descricao">comunidades atendidas</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <h2 class="headers">Faça Parte</h2>
        <section class="chamada-acao">
            <div class="chamada-conteudo">
                <div>
                    <h2>A transformação começa com uma atitude</h2>
                    <p>Junte-se a essa corrente de solidariedade e ajude a transformar vidas e comunidades.</p>
                </div>
                <a href="#voluntariado">Quero ajudar</a>
            </div>
        </section>`;
}

export function renderSobre() {
    return `
        <h1 class="headers" data-titulo-visao tabindex="-1">UM POUCO SOBRE NÓS</h1>
        <section class="sobre">
            <div class="texto">
                <h2 class="titulo">Juntos podemos fazer mais</h2>
                <p>A Conecta Ação é uma plataforma criada para aproximar organizações sociais, voluntários e pessoas que desejam contribuir para um mundo melhor.
                Nosso objetivo é facilitar a divulgação de projetos, a captação de recursos e o recrutamento de voluntários, fortalecendo iniciativas que promovem educação, inclusão social e preservação ambiental.</p>
                <h3 class="titulo">Missão</h3>
                <p>Conectar pessoas e organizações para gerar impacto social positivo por meio da tecnologia, da colaboração e da solidariedade.</p>
                <ul class="estatisticas01">
                    <li>
                        <div class="icone01" aria-hidden="true">🔎</div>
                        <div class="informacao01">
                            <span class="numero01">Transparência</span>
                            <span class="descricao01">Acompanhamento, análise e clareza.</span>
                        </div>
                    </li>
                    <li>
                        <div class="icone01" aria-hidden="true">🤝</div>
                        <div class="informacao01">
                            <span class="numero01">Colaboração</span>
                            <span class="descricao01">União e trabalho em equipe.</span>
                        </div>
                    </li>
                    <li>
                        <div class="icone01" aria-hidden="true">💙</div>
                        <div class="informacao01">
                            <span class="numero01">Impacto social</span>
                            <span class="descricao01">Cuidado, solidariedade e transofrmação</span>
                        </div>
                    </li>
                </ul>
            </div>
            <img src="imagens/voluntariados_doacoes.jfif" alt="Pessoas doando para causas sociais">
        </section>`;
}

export function renderProjetos() {
    return `
        <h1 class="headers" data-titulo-visao tabindex="-1">Nossos Projetos</h1>
        <section class="projetos" id="lista-projetos"></section>`;
}

export function renderComoAjudar() {
    return `
        <h1 class="headers" data-titulo-visao tabindex="-1">Como Ajudar</h1>
        <section class="como-ajudar">
            <div class="titulo-secao">
                <h2>Transforme sua vontade em ação</h2>
                <p>Você pode fazer a diferença seguindo três passos simples.</p>
            </div>
            <div class="etapas">
                <article class="etapa">
                    <div class="numero-etapa" aria-hidden="true">1</div>
                    <div>
                        <h3>Escolha uma causa</h3>
                        <p>Conheça nossos projetos e encontre uma iniciativa que combine com seus valores.</p>
                    </div>
                </article>
                <article class="etapa">
                    <div class="numero-etapa" aria-hidden="true">2</div>
                    <div>
                        <h3>Defina como participar</h3>
                        <p>Você pode contribuir por meio de uma doação, oferecendo seu tempo ou compartilhando o projeto.</p>
                    </div>
                </article>
                <article class="etapa">
                    <div class="numero-etapa" aria-hidden="true">3</div>
                    <div>
                        <h3>Faça a diferença</h3>
                        <p>Acompanhe os resultados da ação e veja como sua participação está tranformando vidas.</p>
                    </div>
                </article>
            </div>
            <a href="#voluntariado" class="botao-voluntario">Quero ser voluntário</a>
        </section>`;
}

export function renderVoluntariado() {
    return `
        <h1 class="headers" data-titulo-visao tabindex="-1">Seja Voluntário</h1>
        <section class="voluntariado">
            <div class="voluntariado-texto">
                <h2>Use seu talento para transformar vidas</h2>
                <p>
                    Preencha seus dados e informe como gostaria de contribuir.
                    Esta é uma demonstração acadêmica: o formulário valida os
                    campos, mas não envia dados a nenhum servidor real.
                </p>
                <p>Os campos marcados como obrigatórios precisam ser preenchidos.</p>
            </div>

            <div id="mensagem-formulario" class="mensagem-formulario" role="status" aria-live="polite"></div>

            <form class="formulario-voluntario" novalidate>
                <div class="campo campo-completo">
                    <label for="nome">Nome completo (obrigatório)</label>
                    <input type="text" id="nome" name="nome" autocomplete="name" required placeholder="Digite seu nome completo" aria-describedby="erro-nome">
                    <span class="erro-campo" id="erro-nome"></span>
                </div>

                <div class="campo">
                    <label for="email">E-mail (obrigatório)</label>
                    <input type="email" id="email" name="email" autocomplete="email" required placeholder="exemplo@email.com" aria-describedby="erro-email">
                    <span class="erro-campo" id="erro-email"></span>
                </div>

                <div class="campo">
                    <label for="telefone">Telefone (obrigatório)</label>
                    <input type="tel" id="telefone" name="telefone" autocomplete="tel" required placeholder="(00) 00000-0000" aria-describedby="erro-telefone">
                    <span class="erro-campo" id="erro-telefone"></span>
                </div>

                <div class="campo">
                    <label for="cidade">Cidade (obrigatório)</label>
                    <input type="text" id="cidade" name="cidade" autocomplete="address-level2" required placeholder="Digite sua cidade" aria-describedby="erro-cidade">
                    <span class="erro-campo" id="erro-cidade"></span>
                </div>

                <div class="campo">
                    <label for="interesse">Área de interesse (obrigatório)</label>
                    <select id="interesse" name="interesse" required aria-describedby="erro-interesse">
                        <option value="" selected disabled>Selecione uma área</option>
                        <option>Educação</option>
                        <option>Tecnologia</option>
                        <option>Meio ambiente</option>
                        <option>Arrecadação de alimentos</option>
                        <option>Comunicação e redes sociais</option>
                    </select>
                    <span class="erro-campo" id="erro-interesse"></span>
                </div>

                <div class="campo campo-completo">
                    <label for="disponibilidade">Disponibilidade</label>
                    <input
                        type="text"
                        id="disponibilidade"
                        name="disponibilidade"
                        placeholder="Ex.: finais de semana ou período da tarde"
                    >
                </div>

                <div class="campo campo-completo">
                    <label for="mensagem">Mensagem</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        placeholder="Conte um pouco sobre como você gostaria de contribuir"
                    ></textarea>
                </div>

                <div class="autorizacao campo-completo">
                    <input type="checkbox" id="autorizacao" name="autorizacao" required aria-describedby="erro-autorizacao">
                    <label for="autorizacao">
                        Autorizo o uso dos meus dados para esta demonstração (obrigatório).
                    </label>
                    <span class="erro-campo" id="erro-autorizacao"></span>
                </div>

                <button type="submit">Enviar inscrição</button>
            </form>
        </section>`;
}

export function renderDepoimentos() {
    return `
        <h1 class="headers" data-titulo-visao tabindex="-1">Depoimentos</h1>
        <section class="depoimentos">
            <div class="depoimentos-titulo">
                <h2>Quem participa, transforma</h2>
                <p>
                    Conheça algumas pessoas que fizeram parte dessa corrente
                    de solidariedade.
                </p>
            </div>

            <div class="depoimentos-container">
                <article class="depoimento-card">
                    <img src="imagens/mariana.png" alt="Foto representativa de Mariana Alves">
                    <div class="estrelas" aria-hidden="true">★★★★★</div>
                    <p>
                        “Participar das ações da Conecta Ação me mostrou que todos
                        nós podemos contribuir, mesmo começando com pouco.”
                    </p>
                    <h3>Mariana Alves</h3>
                    <span class="funcao">Voluntária</span>
                </article>

                <article class="depoimento-card">
                    <img src="imagens/calors.png" alt="Foto representativa de Carlos Mendes">
                    <div class="estrelas" aria-hidden="true">★★★★★</div>
                    <p>
                        “A plataforma nos ajudou a encontrar voluntários e apresentar
                        nosso trabalho para muito mais pessoas.”
                    </p>
                    <h3>Carlos Mendes</h3>
                    <span class="funcao">Coordenador de projeto</span>
                </article>

                <article class="depoimento-card">
                    <img src="imagens/ana.png" alt="Foto representativa de Ana Souza">
                    <div class="estrelas" aria-hidden="true">★★★★★</div>
                    <p>
                        “Gostei da transparência e da facilidade para conhecer os
                        projetos. É muito bom acompanhar os resultados das iniciativas.”
                    </p>
                    <h3>Ana Souza</h3>
                    <span class="funcao">Doadora</span>
                </article>
            </div>
        </section>`;
}

export function renderContato() {
    return `
        <h1 class="headers" data-titulo-visao tabindex="-1">Contato</h1>
        <section class="pagina-contato">
            <p>Fale com a equipe da Conecta Ação pelos canais abaixo.</p>
            <address class="pagina-contato-info">
                <a href="mailto:contato@conectaacao.org">contato@conectaacao.org</a>
                <a href="tel:+5511999999999">(11) 99999-9999</a>
                <p>São Paulo - SP</p>
            </address>
        </section>`;
}

export function renderNaoEncontrada() {
    return `
        <h1 class="headers" data-titulo-visao tabindex="-1">Página não encontrada</h1>
        <section class="pagina-contato">
            <p>Não encontramos essa rota. Volte para a página inicial para continuar navegando.</p>
            <a href="#inicio" class="botao_projeto">Voltar ao início</a>
        </section>`;
}
