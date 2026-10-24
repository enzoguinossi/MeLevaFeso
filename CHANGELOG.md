# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato segue [Keep a Changelog 1.1.0 (pt-BR)](https://keepachangelog.com/pt-BR/1.1.0/),
e o versionamento adota **DateVer** `N.DD.MM.YYYY` (tag `vN.DD.MM.YYYY`), em que `N` é a
sequência da release no mesmo dia.

A convenção completa — como numerar releases do mesmo dia, como escrever uma entrada e a
rastreabilidade versão ↔ commit — está em
[`docs/VERSIONAMENTO.md`](docs/VERSIONAMENTO.md).

## [Unreleased]

### Added

- **Publicação em produção:** o build de `dist` passou a ser servido pelo **Cloudflare
  Pages** (projeto `melevafeso`, branch de produção `main`) no domínio
  **https://melevafeso.guinossi.com**, com CNAME `melevafeso` → `melevafeso.pages.dev`
  (proxy ativo e HTTPS automático) na zona `guinossi.com`. O comando de redeploy está no
  `README.md`.

<!-- Nada pendente além da publicação desde a 1.23.10.2026 — a primeira versão do projeto. -->

## [1.23.10.2026] - 2026-10-23

Primeira versão do **Me Leva**, o MVP front-end da matéria de MVP da FESO. Como não existe
versão anterior, esta seção descreve **o que o projeto entrega hoje**: o app React com as
telas 01 (Landing), 02 (Login) e 06 (Início) portadas do arquivo do Figma.

O escopo desta versão é **exclusivamente visual**. Não há backend, autenticação real,
persistência, validação de formulário nem regra de negócio: os botões trocam de tela ou não
fazem nada, e o formulário de login apenas navega para o Início. As demais telas do arquivo
do Figma (Explorar, Detalhes, Criar atividade, Perfil, Mensagens, Favoritos, Notificações,
Perfil público, Avaliar, modais e as versões de celular) **ainda não foram portadas** e não
fazem parte desta publicação.

### Added

- **Base do app:** Vite 7 + React 19 em JavaScript (`.jsx`), sem TypeScript, sem router e
  sem biblioteca de UI. Dependências de produção restritas a `react` e `react-dom`;
  `vite` e `@vitejs/plugin-react` apenas para desenvolvimento. Entrada em `index.html` +
  `src/main.jsx`, com `npm run dev`, `npm run build` e `npm run preview`.
- **Tokens de design vindos do Figma:** as 14 variáveis do arquivo
  (`texto/principal`, `marca/rosa`, `marca/rosa-texto`, `marca/roxo`, `texto/secundario`,
  `fundo/pagina`, `fundo/superficie`, `borda/suave`, `apoio/rosa`, `apoio/lilas`,
  `apoio/verde`, `apoio/verde-texto`, `apoio/azul`, `apoio/azul-texto`) foram extraídas com
  o MCP do Figma (`get_variable_defs`) e viraram custom properties em `src/styles.css`, com
  os mesmos nomes do design, além do gradiente da marca e da fonte **Inter** (Google Fonts,
  pesos 400–800).
- **Tela 01 — Landing:** navegação com logo, links e ações; hero com badge de cidade, título
  de três linhas, texto de apoio, dois botões, prova social com avatares e colagem de
  imagens com notificação e mini card; faixa de números; "Como funciona" em três passos
  (o do meio em gradiente); grade de oito esportes com foto; três atividades em destaque com
  metadados, vagas e nível; chamada final em gradiente; rodapé com links.
- **Tela 02 — Login:** painel visual de 647px com foto, degradê roxo, logo, mensagem e pill
  de avatares; formulário de 440px com título, campos de e-mail e senha, "Lembrar de mim",
  "Esqueci minha senha", botão em gradiente, divisor "ou", "Continuar com Google" e link
  para criar conta.
- **Tela 06 — Início:** shell do app com sidebar de 248px (navegação, "Criar atividade" em
  gradiente e cartão "Chame a galera") e topbar (busca, cidade, notificações e perfil);
  hero de boas-vindas com foto; filtros por esporte; três próximas atividades; quatro
  recomendações; coluna lateral com "Sua semana" (números e gráfico de barras), mapa "Perto
  de você", desafios com barras de progresso e pessoas com interesses parecidos.
- **Navegação visual por hash:** `#/` (Landing), `#/login` (Login) e `#/home` (Início), com
  um roteador de ~20 linhas em `src/App.jsx` — sem `react-router`.
- **Componentes compartilhados:** `AppShell` (sidebar + topbar), `Icon` (ícones SVG inline,
  sem pacote externo) e primitivos de CSS reutilizados entre telas (botões, chips, tags,
  cards de atividade, painéis e avatares).
- **Assets do Figma:** 23 imagens da Landing (hero, colagem, oito esportes, três atividades
  e dez avatares) e 6 da tela Início (hero, quatro atividades e mapa), exportadas com
  `download_assets` e versionadas em `public/assets/`.
- **Responsividade:** layouts fluidos com `clamp()` para tipografia e espaçamento, hero em
  coluna e grades reduzidas abaixo de 1280/900/620px; no app, sidebar oculta abaixo de
  1100px e coluna lateral empilhada abaixo de 760px.
- **Documentação de versionamento:** `docs/VERSIONAMENTO.md` (DateVer + Keep a Changelog
  1.1.0 pt-BR adaptados a este projeto) e este `CHANGELOG.md`.

### Changed

- O protótipo estático em HTML, CSS e JavaScript (`src/index.html`, `src/style.css`,
  `src/script.js`, com o "Olá mundo" da disciplina) foi **substituído** pelo app React; a
  entrada passou para `index.html` na raiz e `src/main.jsx`.
- O layout foi construído a partir do `get_design_context` e das variáveis do Figma — não
  por medição de captura de tela —, preservando medidas do arquivo: sidebar 248px, coluna
  lateral 360px, hero 272px, raios de 12/14/16/18/20/24px, botões pill de 44–50px e títulos
  de 34/22/17px.
- `README.md` atualizado com o stack, os comandos e o link para o changelog.

### Removed

- `src/index.html`, `src/script.js` e `src/style.css` — o "Olá mundo" em HTML puro que
  existia desde o commit inicial, substituído pelas telas em React. O histórico continua no
  Git.

<!--
Categorias: Added, Changed, Deprecated, Removed, Fixed, Security.
Não crie uma versão nova sem cumprir o checklist de release em docs/VERSIONAMENTO.md.
Próximo release: sem data marcada — depende de portar as telas restantes do Figma
(07 Explorar, 08 Filtros, 09 Detalhes, 10 Criar atividade, 11 Publicada, 12 Minhas
atividades, 13 Perfil, 14 Editar perfil, 15 Participação confirmada, 16 Mensagens,
17 Favoritos, 18 Notificações, 19 Perfil público, 20 Avaliar, modais e M1–M5).
-->
