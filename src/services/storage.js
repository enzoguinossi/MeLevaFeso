/**
 * @file Ferramenta de leitura e escrita no armazenamento do navegador.
 *
 * Os valores são convertidos para JSON antes de serem salvos e convertidos de
 * volta ao serem lidos. Cada chave recebe um prefixo (namespace) para não
 * colidir com outras chaves do mesmo site.
 *
 * @module services/storage
 */

/**
 * Área do armazenamento do navegador.
 *
 * - `session`: `sessionStorage`, dura enquanto a aba estiver aberta.
 * - `local`: `localStorage`, continua após fechar o navegador.
 *
 * @typedef {"session" | "local"} StorageArea
 */

/**
 * Opções aceitas por {@link createStorage}.
 *
 * @typedef {Object} StorageOptions
 * @property {StorageArea} [area="session"] Área usada para salvar os dados.
 * @property {string} [namespace="meleva"] Prefixo aplicado a todas as chaves.
 */

/**
 * API devolvida por {@link createStorage}.
 *
 * @typedef {Object} StorageTool
 * @property {StorageArea} area Área em uso.
 * @property {string} namespace Prefixo das chaves.
 * @property {boolean} isPersistent `true` quando o navegador permite salvar.
 * @property {(key: string, fallback?: unknown) => unknown} read Lê um valor.
 * @property {(key: string, value: unknown) => boolean} write Grava um valor.
 * @property {(key: string) => boolean} remove Remove um valor.
 * @property {(key: string) => boolean} has Verifica se a chave existe.
 * @property {() => string[]} keys Lista as chaves do namespace.
 * @property {() => void} clear Remove todas as chaves do namespace.
 */

/**
 * Retorna a área de armazenamento pedida.
 *
 * O acesso pode falhar quando o navegador bloqueia armazenamento (por exemplo,
 * em modo privado ou por configuração de privacidade). Nesse caso, retorna
 * `null` e a ferramenta continua funcionando sem persistência.
 *
 * @param {StorageArea} area Área desejada.
 * @returns {Storage | null} A área do navegador ou `null`.
 */
function getArea(area) {
  if (typeof window === "undefined") return null;

  try {
    return (area === "local" ? window.localStorage : window.sessionStorage) ?? null;
  } catch {
    return null;
  }
}

/**
 * Cria uma ferramenta de armazenamento com namespace e área configuráveis.
 *
 * @param {StorageOptions} [options] Configuração da ferramenta.
 * @returns {StorageTool} API de leitura e escrita.
 *
 * @example
 * const db = createStorage({ area: "session", namespace: "meleva" });
 * db.write("usuario", { nome: "Mariana" });
 * const usuario = db.read("usuario", null);
 */
export function createStorage({ area = "session", namespace = "meleva" } = {}) {
  const browserStorage = getArea(area);
  const prefix = `${namespace}:`;

  /**
   * Monta a chave completa com o namespace.
   *
   * @param {string} key Chave curta.
   * @returns {string} Chave pronta para o armazenamento.
   */
  function fullKey(key) {
    return `${prefix}${key}`;
  }

  /**
   * Garante que a chave é um texto não vazio.
   *
   * @param {string} key Chave a validar.
   * @throws {TypeError} Quando a chave é inválida.
   */
  function validateKey(key) {
    if (typeof key !== "string" || key.trim() === "") {
      throw new TypeError("A chave deve ser um texto não vazio.");
    }
  }

  /**
   * Lê e converte um valor salvo.
   *
   * @template T
   * @param {string} key Chave curta.
   * @param {T} [fallback=null] Valor devolvido quando a chave não existe ou o JSON é inválido.
   * @returns {T | null} Valor encontrado ou o fallback.
   */
  function read(key, fallback = null) {
    validateKey(key);
    if (!browserStorage) return fallback;

    const raw = browserStorage.getItem(fullKey(key));
    if (raw === null) return fallback;

    try {
      return JSON.parse(raw);
    } catch {
      console.warn(`[storage] Valor inválido em "${fullKey(key)}".`);
      return fallback;
    }
  }

  /**
   * Converte e salva um valor.
   *
   * @param {string} key Chave curta.
   * @param {unknown} value Valor que possa ser convertido para JSON.
   * @returns {boolean} `true` se salvou; `false` se o navegador recusou.
   */
  function write(key, value) {
    validateKey(key);
    if (!browserStorage) return false;

    try {
      const serialized = JSON.stringify(value);
      if (serialized === undefined) {
        console.warn(`[storage] O valor de "${fullKey(key)}" não pode ser convertido para JSON.`);
        return false;
      }

      browserStorage.setItem(fullKey(key), serialized);
      return true;
    } catch (error) {
      console.warn(`[storage] Não foi possível salvar "${fullKey(key)}".`, error);
      return false;
    }
  }

  /**
   * Remove uma chave.
   *
   * @param {string} key Chave curta.
   * @returns {boolean} `true` se a chave existia.
   */
  function remove(key) {
    validateKey(key);
    if (!browserStorage) return false;

    const existed = browserStorage.getItem(fullKey(key)) !== null;
    browserStorage.removeItem(fullKey(key));
    return existed;
  }

  /**
   * Verifica se uma chave existe.
   *
   * @param {string} key Chave curta.
   * @returns {boolean} `true` se a chave existe.
   */
  function has(key) {
    validateKey(key);
    return browserStorage !== null && browserStorage.getItem(fullKey(key)) !== null;
  }

  /**
   * Lista as chaves do namespace, sem o prefixo.
   *
   * @returns {string[]} Chaves encontradas.
   */
  function keys() {
    if (!browserStorage) return [];

    const found = [];
    for (let index = 0; index < browserStorage.length; index += 1) {
      const rawKey = browserStorage.key(index);
      if (rawKey?.startsWith(prefix)) {
        found.push(rawKey.slice(prefix.length));
      }
    }
    return found;
  }

  /**
   * Remove todas as chaves do namespace.
   *
   * Não apaga chaves de outras aplicações ou de outros namespaces.
   *
   * @returns {void}
   */
  function clear() {
    keys().forEach((key) => remove(key));
  }

  return {
    area,
    namespace,
    isPersistent: browserStorage !== null,
    read,
    write,
    remove,
    has,
    keys,
    clear,
  };
}

/**
 * Instância pronta para uso no app.
 *
 * Usa `sessionStorage` e o namespace `meleva`.
 *
 * @example
 * import { storage } from "./services/storage.js";
 *
 * storage.write("usuario", { nome: "Mariana" });
 * const usuario = storage.read("usuario", null);
 */
export const storage = createStorage();
