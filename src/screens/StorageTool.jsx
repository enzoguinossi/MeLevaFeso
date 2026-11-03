/**
 * @file Tela de demonstração da ferramenta de armazenamento do navegador.
 *
 * A tela permite criar, ler, remover e limpar valores no `sessionStorage` e no
 * `localStorage`, usando o namespace padrão `meleva`.
 *
 * @module screens/StorageTool
 */

import { useState } from "react";
import { createStorage } from "../services/storage.js";

/**
 * Um valor salvo no armazenamento.
 *
 * @typedef {Object} StoredEntry
 * @property {string} key Chave curta, sem o namespace.
 * @property {unknown} value Valor já convertido de JSON.
 */

/**
 * Lê todas as chaves do namespace e seus valores.
 *
 * @param {ReturnType<typeof createStorage>} store Ferramenta de armazenamento.
 * @returns {StoredEntry[]} Valores encontrados.
 */
function readEntries(store) {
  return store.keys().map((key) => ({ key, value: store.read(key) }));
}

/**
 * Converte um valor em texto para exibir no formulário.
 *
 * @param {unknown} value Valor salvo.
 * @returns {string} Texto pronto para edição.
 */
function formatValue(value) {
  if (typeof value === "string") return value;
  return JSON.stringify(value, null, 2);
}

/**
 * Cria um resumo curto do valor salvo.
 *
 * @param {unknown} value Valor salvo.
 * @returns {string} Resumo com no máximo 60 caracteres.
 */
function preview(value) {
  const text = formatValue(value);
  return text.length > 60 ? `${text.slice(0, 60)}…` : text;
}

/**
 * Tela de demonstração da ferramenta de armazenamento.
 *
 * @param {{ onNavigate: (screen: string, event?: Event) => void }} props
 *   Função de navegação entre as telas do app.
 * @returns {JSX.Element} A tela completa.
 */
export default function StorageTool({ onNavigate }) {
  const [area, setArea] = useState("session");
  const [entries, setEntries] = useState(() => readEntries(createStorage({ area: "session" })));
  const [keyName, setKeyName] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const store = createStorage({ area });

  /**
   * Recarrega a lista de valores da área atual.
   *
   * @returns {void}
   */
  function refresh() {
    setEntries(readEntries(store));
  }

  /**
   * Troca a área de armazenamento e recarrega a lista.
   *
   * @param {"session" | "local"} nextArea Área escolhida.
   * @returns {void}
   */
  function handleAreaChange(nextArea) {
    setArea(nextArea);
    setEntries(readEntries(createStorage({ area: nextArea })));
    setMessage("");
  }

  /**
   * Salva a chave e o valor digitados.
   *
   * O valor é interpretado como JSON quando possível; caso contrário, é salvo
   * como texto comum.
   *
   * @param {import("react").FormEvent<HTMLFormElement>} event Evento do formulário.
   * @returns {void}
   */
  function handleSave(event) {
    event.preventDefault();

    const name = keyName.trim();
    if (!name) {
      setMessage("Informe uma chave.");
      return;
    }

    let parsedValue;
    try {
      parsedValue = JSON.parse(value);
    } catch {
      parsedValue = value;
    }

    const saved = store.write(name, parsedValue);
    setMessage(saved ? `Chave "${name}" salva.` : "Não foi possível salvar nesta área.");
    refresh();
  }

  /**
   * Lê a chave digitada e mostra o valor no formulário.
   *
   * @returns {void}
   */
  function handleRead() {
    const name = keyName.trim();
    if (!name) {
      setMessage("Informe uma chave.");
      return;
    }

    if (!store.has(name)) {
      setValue("");
      setMessage(`Chave "${name}" não encontrada.`);
      return;
    }

    setValue(formatValue(store.read(name)));
    setMessage(`Chave "${name}" carregada.`);
  }

  /**
   * Remove a chave digitada.
   *
   * @returns {void}
   */
  function handleRemove() {
    const name = keyName.trim();
    if (!name) {
      setMessage("Informe uma chave.");
      return;
    }

    const removed = store.remove(name);
    setMessage(removed ? `Chave "${name}" removida.` : `Chave "${name}" não encontrada.`);
    refresh();
  }

  /**
   * Remove todas as chaves do namespace na área atual.
   *
   * @returns {void}
   */
  function handleClear() {
    store.clear();
    refresh();
    setMessage("Todas as chaves do namespace foram removidas.");
  }

  /**
   * Copia um valor da lista para o formulário.
   *
   * @param {StoredEntry} entry Valor selecionado.
   * @returns {void}
   */
  function handleLoad(entry) {
    setKeyName(entry.key);
    setValue(formatValue(entry.value));
    setMessage(`Chave "${entry.key}" carregada no formulário.`);
  }

  /**
   * Remove um valor diretamente da lista.
   *
   * @param {StoredEntry} entry Valor selecionado.
   * @returns {void}
   */
  function handleRemoveEntry(entry) {
    store.remove(entry.key);
    refresh();
    setMessage(`Chave "${entry.key}" removida.`);
  }

  return (
    <div className="storage">
      <header className="storage__head">
        <div>
          <a className="logo logo--sm" href="#/" onClick={(event) => onNavigate("landing", event)}>
            Me <span>Leva</span>
          </a>
          <h1>Armazenamento do navegador</h1>
          <p>
            Ferramenta simples para criar, ler e remover valores do sessionStorage e do
            localStorage.
          </p>
        </div>

        <a className="btn btn--ghost" href="#/home" onClick={(event) => onNavigate("home", event)}>
          Voltar ao início
        </a>
      </header>

      {!store.isPersistent && (
        <p className="storage__warning">
          O navegador bloqueou esta área de armazenamento. Os valores não serão salvos.
        </p>
      )}

      <div className="storage__grid">
        <section className="storage__panel">
          <h2>Criar ou atualizar</h2>

          <div className="storage__areas">
            {["session", "local"].map((option) => (
              <button
                key={option}
                className={option === area ? "chip chip--active" : "chip"}
                type="button"
                onClick={() => handleAreaChange(option)}
              >
                {option === "session" ? "sessionStorage" : "localStorage"}
              </button>
            ))}
          </div>

          <form className="storage__form" onSubmit={handleSave}>
            <label className="field">
              <span>Chave</span>
              <span className="field__box">
                <input
                  type="text"
                  placeholder="usuario, atividades, tema..."
                  value={keyName}
                  onChange={(event) => setKeyName(event.target.value)}
                />
              </span>
            </label>

            <label className="field">
              <span>Valor (JSON ou texto)</span>
              <textarea
                className="storage__textarea"
                placeholder={'{"nome": "Mariana", "nivel": "Intermediária"}'}
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </label>

            <div className="storage__actions">
              <button className="btn btn--gradient" type="submit">
                Salvar
              </button>
              <button className="btn btn--ghost" type="button" onClick={handleRead}>
                Ler
              </button>
              <button className="btn btn--ghost" type="button" onClick={handleRemove}>
                Remover
              </button>
              <button className="btn btn--ghost" type="button" onClick={handleClear}>
                Limpar tudo
              </button>
            </div>
          </form>

          <p className="storage__message" role="status">
            {message}
          </p>
        </section>

        <section className="storage__panel">
          <h2>Valores salvos</h2>
          <p className="storage__hint">
            Chaves do namespace <code>meleva</code> em{" "}
            {area === "session" ? "sessionStorage" : "localStorage"}.
          </p>

          {entries.length === 0 ? (
            <p className="storage__empty">Nenhum valor salvo nesta área.</p>
          ) : (
            <ul className="storage__list">
              {entries.map((entry) => (
                <li className="storage__item" key={entry.key}>
                  <div className="storage__item-info">
                    <strong className="storage__item-key">{entry.key}</strong>
                    <span className="storage__item-value">{preview(entry.value)}</span>
                  </div>

                  <div className="storage__item-actions">
                    <button
                      className="btn btn--ghost btn--sm"
                      type="button"
                      onClick={() => handleLoad(entry)}
                    >
                      Usar
                    </button>
                    <button
                      className="btn btn--ghost btn--sm"
                      type="button"
                      onClick={() => handleRemoveEntry(entry)}
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
