import { Icon } from "../icons.jsx";

const navItems = [
  { id: "home", label: "Início", icon: Icon.home },
  { id: "explorar", label: "Explorar", icon: Icon.compass },
  { id: "minhas", label: "Minhas atividades", icon: Icon.calendar },
  { id: "mensagens", label: "Mensagens", icon: Icon.chat },
  { id: "favoritos", label: "Favoritos", icon: Icon.heart },
  { id: "perfil", label: "Perfil", icon: Icon.user },
];

export default function AppShell({ active = "home", children, onNavigate }) {
  return (
    <div className="app">
      <aside className="side">
        <a className="logo side__logo" href="#/" onClick={(event) => onNavigate("landing", event)}>
          Me <span>Leva</span>
        </a>

        <nav className="side__nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={item.id === active ? "side__item side__item--active" : "side__item"}
              href={`#${item.id}`}
              onClick={(event) => event.preventDefault()}
            >
              <span className="side__icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--gradient btn--block side__cta" href="#criar" onClick={(event) => event.preventDefault()}>
          {Icon.plus}
          Criar atividade
        </a>

        <div className="side__invite">
          <span className="side__invite-icon">{Icon.users}</span>
          <strong>Chame a galera</strong>
          <p>Convide amigos e pratique junto.</p>
          <a className="btn btn--ghost btn--sm" href="#convidar" onClick={(event) => event.preventDefault()}>
            Convidar
          </a>
        </div>
      </aside>

      <div className="app__body">
        <header className="topbar">
          <label className="topbar__search">
            <span className="topbar__search-icon">{Icon.search}</span>
            <input placeholder="Buscar atividades, esportes ou locais..." />
          </label>

          <button className="topbar__place" type="button">
            {Icon.pin}
            Teresópolis, RJ
            {Icon.chevron}
          </button>

          <button className="topbar__bell" type="button" aria-label="Notificações">
            {Icon.bell}
            <span />
          </button>

          <button className="topbar__user" type="button">
            <img src="/assets/landing/avatar-8.png" alt="" />
            <span>
              <strong>Mariana Souza</strong>
              Intermediária
            </span>
            {Icon.chevron}
          </button>
        </header>

        <main className="app__content">{children}</main>
      </div>
    </div>
  );
}
