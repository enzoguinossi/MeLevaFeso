# Me Leva

Projeto **Me Leva** da matéria de MVP da FESO: uma aplicação para encontrar pessoas e
atividades esportivas perto de você. Este repositório é o **MVP front-end** — as telas
portadas do Figma, sem backend, autenticação real ou regra de negócio.

Design: [Me Leva — MVP Front-end (Figma)](https://www.figma.com/design/sNDmW8GeK9fNdVHC0r0Izm/Me-Leva-%E2%80%94-MVP-Front-end)

## Stack

- **React 19** + **Vite 7**, JavaScript (`.jsx`)
- CSS puro em um único arquivo (`src/styles.css`), sem Tailwind nem biblioteca de UI
- Navegação por hash (`#/`, `#/login`, `#/home`) — sem `react-router`
- Fonte **Inter** (Google Fonts)

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Estrutura

```text
index.html                 entrada do Vite
src/main.jsx               createRoot + <App />
src/App.jsx                roteador de telas por hash
src/screens/Landing.jsx    tela 01 — Landing
src/screens/Login.jsx      tela 02 — Login
src/screens/Signup.jsx     tela de cadastro (visual)
src/screens/StorageTool.jsx  ferramenta de armazenamento (#/storage)
src/screens/Home.jsx       tela 06 — Início
src/components/AppShell.jsx  sidebar + topbar das telas internas
src/services/storage.js    leitura/escrita no armazenamento do navegador
src/icons.jsx              ícones SVG inline
src/styles.css             tokens do Figma + estilos
public/assets/             imagens exportadas do Figma
docs/README.md             índice da documentação
docs/VERSIONAMENTO.md      convenção de versionamento e changelog
docs/ARMAZENAMENTO.md      ferramenta de armazenamento do navegador
docs/requisitos/           guia + templates de requisitos (RF e RNF)
```

## Telas portadas

| Tela | Status |
| --- | --- |
| 01. Landing | ✅ |
| 02. Login | ✅ |
| Cadastro | ✅ |
| 06. Início | ✅ |
| 03–05, 07–20, modais e M1–M5 | ⏳ pendentes |

As demais telas existem no arquivo do Figma e serão portadas na sequência. O escopo é
**visual**: os formulários não enviam dados e os botões apenas navegam entre telas.

## Deploy

Produção: **https://melevafeso.guinossi.com** — Cloudflare Pages, projeto `melevafeso`,
branch `main`, servindo o conteúdo de `dist`.

```bash
npm run build
npx wrangler pages deploy dist --project-name=melevafeso --branch=main
```

O domínio é um CNAME `melevafeso` → `melevafeso.pages.dev` (proxy ativo, HTTPS automático)
na zona `guinossi.com`.

## Documentação

- [`docs/README.md`](docs/README.md) — índice da documentação.
- [`docs/requisitos/`](docs/requisitos/README.md) — como registrar requisitos funcionais
  (RF) e não funcionais (RNF), com templates e índice.
- [`docs/VERSIONAMENTO.md`](docs/VERSIONAMENTO.md) — versionamento e changelog.
- [`docs/ARMAZENAMENTO.md`](docs/ARMAZENAMENTO.md) — API da ferramenta de armazenamento
  do navegador.

## Ferramenta de armazenamento

`src/services/storage.js` lê e grava valores JSON no `sessionStorage` ou no
`localStorage`, usando o namespace `meleva`. Para testar pela interface, rode o projeto e
abra `http://localhost:5173/#/storage`.

## Versionamento

O projeto usa **DateVer** `N.DD.MM.YYYY` (tag `vN.DD.MM.YYYY`) e changelog no formato
[Keep a Changelog 1.1.0 (pt-BR)](https://keepachangelog.com/pt-BR/1.1.0/). Veja
[`CHANGELOG.md`](CHANGELOG.md) e [`docs/VERSIONAMENTO.md`](docs/VERSIONAMENTO.md).
