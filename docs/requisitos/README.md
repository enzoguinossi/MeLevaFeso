# Requisitos — Me Leva

Guia para registrar e manter os requisitos do Me Leva:

- **Requisito funcional (RF):** o que o app **faz** — ações, telas e resultados observáveis
  para quem usa.
- **Requisito não funcional (RNF):** **como** o app precisa se comportar — desempenho,
  segurança, privacidade, usabilidade, acessibilidade, compatibilidade etc.

> O projeto está no estágio de **MVP visual**: não há backend, autenticação real,
> persistência nem regra de negócio. Requisitos que dependam disso devem ser registrados
> como `Proposto` (ou com a parte dependente em **Fora de escopo**), não como
> `Implementado`.

## 1. Estrutura

```text
docs/requisitos/
├── README.md               este guia + índice
├── funcionais/
│   ├── _TEMPLATE.md        template de RF
│   └── RF-NNN.md           criado ao registrar um requisito funcional
└── nao-funcionais/
    ├── _TEMPLATE.md        template de RNF
    └── RNF-NNN.md          criado ao registrar um requisito não funcional
```

- **Um requisito por arquivo.** O nome do arquivo é o próprio ID: `RF-001.md`,
  `RNF-014.md`.
- `_TEMPLATE.md` é só modelo: **nunca** registre um requisito editando o template.
- O índice deste documento é a **fonte da verdade** da lista de requisitos.

## 2. Convenção de IDs

| Tipo | Prefixo | Formato | Exemplo |
| --- | --- | --- | --- |
| Funcional | `RF` | `RF-NNN` | `RF-001` |
| Não funcional | `RNF` | `RNF-NNN` | `RNF-001` |

- Numeração sequencial de **três dígitos**, por tipo.
- **Não reaproveite** o número de um requisito descartado: ele permanece no índice com o
  status `Descartado`, para preservar o histórico.
- O ID aparece no nome do arquivo, no título e nas referências cruzadas.
- RFs e RNFs se referenciam pelo ID (campos `RNFs relacionados` / `RFs relacionados`).

## 3. Status

| Status | Significado |
| --- | --- |
| `Proposto` | Escrito e aguardando validação; ainda não faz parte do escopo aprovado. |
| `Aprovado` | Validado para entrar no escopo. |
| `Em implementação` | Sendo construído nas telas/código. |
| `Implementado` | Entregue e verificável na versão indicada no requisito. |
| `Descartado` | Saiu do escopo; o número não é reaproveitado. |

O caminho normal é `Proposto → Aprovado → Em implementação → Implementado`. Um requisito
pode ir para `Descartado` a partir de qualquer status.

## 4. Prioridade (MoSCoW adaptado)

| Prioridade | Significado |
| --- | --- |
| `Essencial` | Sem ele o MVP não cumpre o objetivo. |
| `Importante` | Relevante, mas o MVP funciona sem. |
| `Desejável` | Melhoria futura; pode esperar. |

## 5. Como adicionar um requisito

1. **Decida o tipo.** Descreve uma ação/resultado de quem usa? **RF**. Descreve uma
   qualidade mensurável de como o sistema se comporta? **RNF**.
2. **Copie o template** correspondente para a pasta do tipo.
3. **Renomeie** para o próximo ID livre (`RF-00N.md` / `RNF-00N.md`), sem reaproveitar
   números.
4. **Preencha** todos os campos, trocando os `«...»` e apagando as instruções em citação e
   os exemplos em comentário.
5. **Atualize o índice** na seção 7 ou 8 deste arquivo.
6. Se o requisito já foi entregue, **registre no `CHANGELOG.md`** na seção do release,
   citando o ID.

### Checklist antes de salvar

- [ ] Nome do arquivo igual ao ID e ID único.
- [ ] Status e prioridade preenchidos.
- [ ] Critérios de aceite **observáveis** (dá para dizer "passou" ou "falhou").
- [ ] RFs/RNFs relacionados citados pelo ID.
- [ ] Índice deste README atualizado.

## 6. Rastreabilidade

Cada requisito deve apontar para onde ele vive:

- **Tela do Figma** — número e nome (ex.: `02. Login`).
- **Código** — arquivo(s) que implementam (ex.: `src/screens/Login.jsx`).
- **Versão** — DateVer da release em que foi entregue (ex.: `1.23.10.2026`).

Assim o requisito conversa com o [`CHANGELOG.md`](../../CHANGELOG.md) e com a convenção de
[`../VERSIONAMENTO.md`](../VERSIONAMENTO.md).

## 7. Índice — requisitos funcionais

| ID | Requisito | Status | Prioridade | Tela do Figma | Arquivo |
| --- | --- | --- | --- | --- | --- |
| — | Nenhum requisito funcional registrado ainda. | — | — | — | — |

## 8. Índice — requisitos não funcionais

| ID | Requisito | Categoria | Status | Prioridade | Arquivo |
| --- | --- | --- | --- | --- | --- |
| — | Nenhum requisito não funcional registrado ainda. | — | — | — | — |
