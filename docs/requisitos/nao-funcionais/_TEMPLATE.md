# RNF-NNN — «título com a métrica»

> Template de **requisito não funcional**. Copie este arquivo para `RNF-NNN.md` (próximo
> ID livre), troque os `«...»` e apague as instruções em citação. Um requisito por
> arquivo; não edite o template para registrar um requisito novo.

| Campo | Valor |
| --- | --- |
| **ID** | RNF-NNN |
| **Categoria** | «categoria» <!-- Desempenho · Segurança · Privacidade · Usabilidade · Acessibilidade · Compatibilidade · Confiabilidade · Manutenibilidade · Portabilidade --> |
| **Status** | Proposto <!-- Proposto · Aprovado · Em implementação · Implementado · Descartado --> |
| **Prioridade** | «prioridade» <!-- Essencial · Importante · Desejável --> |
| **Escopo** | «app inteiro ou telas/componentes» |
| **Métrica** | «número + unidade + condição» <!-- ex.: "LCP < 2,5 s em 4G" --> |
| **Forma de verificação** | «ferramenta ou procedimento» <!-- ex.: Lighthouse, teste manual, build --> |
| **RFs relacionados** | — <!-- ex.: RF-001, RF-004 --> |

## 1. Descrição

«Qual atributo de qualidade precisa ser garantido e por quê. Cite o risco ou a
experiência que o requisito protege.»

## 2. Critério mensurável

- **Alvo:** «valor ideal».
- **Mínimo aceitável:** «limite abaixo do qual o requisito falha».
- **Condição de medição:** «dispositivo, rede, ferramenta e momento da medição».

> Um RNF sem número, unidade e condição de medição não é verificável. Se ainda não houver
> métrica definida, mantenha o status em `Proposto` e registre a pendência.

## 3. Critérios de aceite

- [ ] **Dado** «condição de medição», **quando** «procedimento», **então** «resultado
      dentro do alvo».
- [ ] «...»

## 4. Verificação

- [ ] «Como conferir: comando, ferramenta, tela ou teste manual.»
- [ ] «...»

## 5. Dependências e observações

- «Decisão técnica, requisito funcional ou limitação de ambiente que afete a métrica.»
- «...»

## 6. Histórico

| Data | Versão | Mudança |
| --- | --- | --- |
| AAAA-MM-DD | — | Criação do requisito. |

<!--
Exemplo de preenchimento — apague este bloco no arquivo real:

# RNF-001 — Layout responsivo de 360 px a 1440 px

| Campo | Valor |
| --- | --- |
| **ID** | RNF-001 |
| **Categoria** | Compatibilidade |
| **Status** | Implementado |
| **Prioridade** | Essencial |
| **Escopo** | Landing, Login e Início |
| **Métrica** | Sem rolagem horizontal em larguras de 360 px a 1440 px |
| **Forma de verificação** | Inspeção manual no navegador com o DevTools |
| **RFs relacionados** | RF-001, RF-002 |

## 2. Critério mensurável

- **Alvo:** nenhuma rolagem horizontal em 360, 768, 1024 e 1440 px.
- **Mínimo aceitável:** nenhuma rolagem horizontal em 360 px e 1440 px.
- **Condição de medição:** Chrome, DevTools, modo responsivo, zoom 100%.
-->
