# Armazenamento do navegador — Me Leva

Ferramenta própria para **criar, ler e remover valores** no `sessionStorage` e no
`localStorage`. Não usa biblioteca externa: toda a lógica está em
[`src/services/storage.js`](../src/services/storage.js), com JSDoc em português.

## O que ela faz

- Converte valores para JSON ao salvar e de volta ao ler.
- Aplica o namespace `meleva` para não colidir com outras chaves do site.
- Lista e limpa **apenas** as chaves do namespace.
- Devolve um valor padrão (fallback) quando a chave não existe ou o JSON é inválido.
- Informa quando o navegador bloqueia o armazenamento ou recusa a gravação.

## API

| Método | Retorno | O que faz |
| --- | --- | --- |
| `read(key, fallback = null)` | `unknown` | Lê e converte o valor da chave. |
| `write(key, value)` | `boolean` | Converte e salva o valor; `false` se o navegador recusar. |
| `remove(key)` | `boolean` | Remove a chave; `true` se ela existia. |
| `has(key)` | `boolean` | Verifica se a chave existe. |
| `keys()` | `string[]` | Lista as chaves do namespace, sem o prefixo. |
| `clear()` | `void` | Remove todas as chaves do namespace. |
| `isPersistent` | `boolean` | Indica se o navegador permitiu usar a área escolhida. |

## Exemplo

```js
import { storage } from "../services/storage.js";

// Salvar um objeto
storage.write("usuario", { nome: "Mariana", nivel: "Intermediária" });

// Ler o objeto de volta
const usuario = storage.read("usuario", null);

// Verificar, listar e remover
storage.has("usuario");  // true
storage.keys();          // ["usuario"]
storage.remove("usuario");
```

Também é possível criar uma instância com outra área ou outro namespace:

```js
import { createStorage } from "../services/storage.js";

const local = createStorage({ area: "local", namespace: "meleva" });
local.write("tema", "claro");
```

## Áreas disponíveis

| Área | Onde fica | Quando usar |
| --- | --- | --- |
| `session` (padrão) | `sessionStorage` | Dados da aba atual; sobrevivem ao refresh, mas somem ao fechar a aba. |
| `local` | `localStorage` | Dados que devem continuar depois de fechar o navegador. |

## Namespace

Toda chave é salva com o prefixo `meleva:`. Por exemplo, `storage.write("usuario", dados)`
grava a chave `meleva:usuario`.

Isso permite que `keys()` e `clear()` trabalhem apenas com os dados do Me Leva, sem
apagar outras chaves do mesmo domínio.

## Ferramenta visual

Com o projeto rodando (`npm run dev`), abra:

```text
http://localhost:5173/#/storage
```

A tela permite:

- alternar entre `sessionStorage` e `localStorage`;
- salvar uma chave com valor em JSON ou texto;
- ler, remover e limpar valores;
- ver a lista de chaves salvas e carregar cada uma no formulário.

## Limitações

- O limite típico é de **cerca de 5 MB** por área, dependendo do navegador.
- Os dados ficam **visíveis no DevTools** (Application → Storage). Não use para senhas,
  tokens reais ou qualquer informação sensível.
- Só valores compatíveis com JSON são suportados. Funções, `undefined` e estruturas
  circulares não são salvas.
- Se o navegador bloquear o armazenamento, a ferramenta continua abrindo, mas
  `write()` retorna `false` e `isPersistent` fica `false`.
- Não há sincronização entre abas além do comportamento nativo de cada área.

## Onde está a documentação no código

- [`src/services/storage.js`](../src/services/storage.js) — JSDoc de todas as funções,
  tipos e exemplos.
- [`src/screens/StorageTool.jsx`](../src/screens/StorageTool.jsx) — JSDoc da tela e dos
  manipuladores de evento.
