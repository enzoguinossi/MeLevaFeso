# Versionamento e changelog — Me Leva

Este documento é a **fonte detalhada** da convenção de versionamento e de changelog do
projeto. Ele mescla duas referências externas e as adapta ao Me Leva:

| Referência | O que aproveitamos |
| --- | --- |
| [Date Versioning (Date-Ver)](https://date-ver.com/) | a ideia de que o número da versão representa **quando** a release aconteceu (data + sequência no mesmo dia), em vez de compatibilidade. |
| [Keep a Changelog 1.1.0 (pt-BR)](https://keepachangelog.com/pt-BR/1.1.0/) | a estrutura do `CHANGELOG.md`: seção `Unreleased`, versões em ordem decrescente, categorias por tipo de mudança, entradas para humanos. |

O projeto segue a mesma convenção do
[`ProjetoFinalFAETEC`](https://github.com/enzoguinossi/ProjetoFinalFAETEC), adaptada para o
escopo deste MVP visual.

---

## 1. DateVer adaptado: `N.DD.MM.YYYY`

### 1.1 Formato

```text
N.DD.MM.YYYY
```

- `N` — **sequência da release no mesmo dia**, começando em **1** e reiniciando a cada
  novo dia.
- `DD.MM.YYYY` — dia, mês e ano da release, com **dois dígitos** para dia e mês
  (`05.03.2026`, não `5.3.2026`) e **quatro** para o ano.
- A tag Git correspondente é **`vN.DD.MM.YYYY`**.

Exemplo: a primeira release de 23/10/2026 é a versão `1.23.10.2026`, com a tag
`v1.23.10.2026`.

### 1.2 Por que `N` na frente

O Date-Ver original escreve a data primeiro e a sequência depois (`20251115.1`,
`20251115.2`). O Me Leva usa a mesma ideia — data + sequência para a segunda release do
mesmo dia — mas com `N` **na frente**, para que a versão fique legível e ordenável no dia a
dia (`1.23.10.2026`, `2.23.10.2026`).

- a granularidade é **sempre** dia (`N.DD.MM.YYYY`);
- a ordenação é: **primeiro a data, depois `N`** — dentro do mesmo dia, `2.…` vem depois
  de `1.…`.

### 1.3 Duas releases no mesmo dia

Nunca reaproveite um número. Se já saiu uma release hoje, a próxima é `N + 1`:

```text
23/10/2026  →  1.23.10.2026   tag v1.23.10.2026
23/10/2026  →  2.23.10.2026   tag v2.23.10.2026   (2ª release do mesmo dia)
24/10/2026  →  1.24.10.2026   tag v1.24.10.2026   (N reinicia em 1)
```

No `CHANGELOG.md` a mais recente fica acima:

```markdown
## [2.23.10.2026] - 2026-10-23

## [1.23.10.2026] - 2026-10-23
```

### 1.4 O que a versão comunica — e o que não comunica

- A versão comunica **quando** a release saiu. Não há `major`/`minor`/`patch` e não há
  promessa de compatibilidade: **o projeto não usa SemVer**.
- Mudança que quebra algo (remoção de tela, mudança de contrato visual) **não** é
  sinalizada pelo número. Ela precisa estar visível no changelog, nas categorias
  `Changed` / `Deprecated` / `Removed`.
- `N` **não** é a quantidade de features do dia; é apenas a ordem de publicação.

### 1.5 Regras que não podem quebrar

1. A data da versão é a **data da release**, não a data do primeiro commit da tarefa.
2. `N` começa em **1** e só aumenta dentro do mesmo dia; em outro dia, volta a `1`.
3. Não existem duas versões iguais. Mesmo conjunto de mudanças, publicações diferentes ⇒
   versões diferentes.
4. A **tag** repete a versão com `v` (`vN.DD.MM.YYYY`) e é criada **depois** do checklist de
   release e da **aprovação do usuário** — sem isso, não se cria tag.
5. Não invente data "bonita" nem versão retroativa: a versão registra o dia real em que a
   release foi feita.
6. **Não se cria branch por versão.** O projeto mantém **só a `main`** como branch de
   integração: a tag é criada direto na `main`, no commit do release.

> **Fuso de referência:** o dia da release é o de **`America/Sao_Paulo`** (UTC−03:00).

---

## 2. Changelog: Keep a Changelog 1.1.0 (pt-BR)

Arquivo: **`CHANGELOG.md`**, na raiz, sempre com este cabeçalho:

```markdown
# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato segue [Keep a Changelog 1.1.0 (pt-BR)](https://keepachangelog.com/pt-BR/1.1.0/),
e o versionamento adota **DateVer** `N.DD.MM.YYYY` (tag `vN.DD.MM.YYYY`), em que `N` é a
sequência da release no mesmo dia.

A convenção completa está em [`docs/VERSIONAMENTO.md`](docs/VERSIONAMENTO.md).

## [Unreleased]
```

### 2.1 Estrutura

1. **`## [Unreleased]` sempre no topo** — acumula o que ainda não foi publicado.
2. Abaixo, as versões publicadas em **ordem decrescente** (a mais nova primeiro).
3. Cada release é um `##` com a versão e a data em **ISO 8601** (`AAAA-MM-DD`):

   ```markdown
   ## [1.23.10.2026] - 2026-10-23
   ```

   A data ISO no título é o formato recomendado pelo Keep a Changelog (sem ambiguidade
   entre dia e mês); a versão em si carrega a data no formato `DD.MM.YYYY`.
4. Ao publicar, o conteúdo de `Unreleased` **passa a ser** a seção da nova versão e a seção
   `Unreleased` fica vazia, no topo, pronta para o próximo ciclo.
5. Quando existirem tags publicadas, os títulos podem virar links de comparação, como o
   Keep a Changelog sugere. Enquanto não houver tag, os títulos ficam sem link.

### 2.2 Categorias

Os títulos no `CHANGELOG.md` são os **nomes canônicos em inglês**; a leitura em português
está na tabela:

| Categoria no arquivo | Em português | Quando usar |
| --- | --- | --- |
| `Added` | Adicionado | tela, componente, token ou arquivo novo |
| `Changed` | Modificado | mudança em algo que já existia — **inclui quebra de comportamento** |
| `Deprecated` | Obsoleto | algo que vai sair em breve |
| `Removed` | Removido | algo que saiu nesta versão |
| `Fixed` | Corrigido | defeito corrigido |
| `Security` | Segurança | vulnerabilidade corrigida |

Uma release não precisa ter todas as categorias — só as que se aplicam, nesta ordem.

### 2.3 Como escrever uma entrada

- Escreva para **quem usa o projeto**, não para o Git: "Tela 06 — Início", não
  "commit abc123".
- Diga **o que mudou e por quê**, com o caminho do arquivo quando ajudar a localizar
  (`src/screens/Home.jsx`).
- Uma linha por mudança relevante; detalhes em sub-bullets quando a mudança tiver partes.
- **Não** registre commits de formatação, renomeação interna sem efeito visível ou
  atualização de dependência sem impacto.
- Se a mudança quebra algo, ela **precisa** aparecer em `Changed`/`Removed` — o número da
  versão não avisa.

### 2.4 Checklist de release

1. Tudo o que vai sair está em `Unreleased`?
2. `npm run build` passa e as telas afetadas foram conferidas no navegador?
3. A versão do dia está correta (`N.DD.MM.YYYY`, `N` reinicia a cada dia)?
4. `Unreleased` virou a seção da nova versão, com a data ISO no título?
5. `Unreleased` ficou vazia no topo?
6. Commit na `main` com as mudanças + changelog.
7. Tag `vN.DD.MM.YYYY` criada **somente** com aprovação do usuário.

### 2.5 Rastreabilidade versão ↔ commit

A versão existe no `CHANGELOG.md` e na tag. O commit de release deve citar a versão no
corpo, por exemplo:

```text
chore(release): 1.23.10.2026
```

Commits de trabalho não precisam de número de versão — a associação acontece no release.
