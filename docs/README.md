# Documentação — Me Leva

Índice da documentação do projeto. Os documentos ficam em `docs/`, são escritos em
português (pt-BR) e seguem os mesmos padrões de data e versão do restante do repositório.

## Índice

| Documento | O que tem |
| --- | --- |
| [`VERSIONAMENTO.md`](VERSIONAMENTO.md) | Convenção DateVer `N.DD.MM.YYYY` e changelog no formato Keep a Changelog 1.1.0 (pt-BR). |
| [`ARMAZENAMENTO.md`](ARMAZENAMENTO.md) | API da ferramenta de armazenamento do navegador, exemplos, áreas, namespace e limitações. |
| [`requisitos/README.md`](requisitos/README.md) | Guia para registrar requisitos: convenção de IDs, status, prioridade, como preencher e índice de RFs/RNFs. |
| [`requisitos/funcionais/_TEMPLATE.md`](requisitos/funcionais/_TEMPLATE.md) | Template para um **requisito funcional** (`RF-NNN`). |
| [`requisitos/nao-funcionais/_TEMPLATE.md`](requisitos/nao-funcionais/_TEMPLATE.md) | Template para um **requisito não funcional** (`RNF-NNN`). |

## Estrutura

```text
docs/
├── README.md                  este índice
├── VERSIONAMENTO.md           versionamento e changelog
├── ARMAZENAMENTO.md           ferramenta de armazenamento do navegador
└── requisitos/
    ├── README.md              guia e índice de requisitos
    ├── funcionais/
    │   └── _TEMPLATE.md       template de requisito funcional
    └── nao-funcionais/
        └── _TEMPLATE.md       template de requisito não funcional
```

## Convenções

- **Um assunto por arquivo**, com links relativos entre os documentos.
- **Datas em ISO 8601** (`AAAA-MM-DD`); versões no formato DateVer do projeto
  (`N.DD.MM.YYYY`, tag `vN.DD.MM.YYYY`).
- Arquivos que começam com `_` são **modelos**: copie, renomeie e preencha — não registre
  um requisito editando o template.
- Documento novo entra no índice acima e, quando a mudança for relevante, no
  [`CHANGELOG.md`](../CHANGELOG.md) na seção `Added`.

## Fora de `docs/`

| Documento | O que tem |
| --- | --- |
| [`README.md`](../README.md) | Visão do projeto, stack, como rodar e estrutura de pastas. |
| [`CHANGELOG.md`](../CHANGELOG.md) | Histórico de mudanças por versão publicada. |
