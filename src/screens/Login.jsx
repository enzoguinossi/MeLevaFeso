export default function Login({ onNavigate }) {
  return (
    <div className="auth">
      <aside className="auth__visual">
        <img className="auth__photo" src="/assets/landing/hero-small.png" alt="" />
        <div className="auth__overlay" />

        <a className="auth__logo" href="#" onClick={(event) => onNavigate("landing", event)}>
          Me Leva
        </a>

        <div className="auth__message">
          <h2>Volte para o movimento.</h2>
          <p>Suas próximas atividades — e as pessoas que vão com você — estão esperando.</p>

          <div className="auth__pill">
            <div className="auth__pill-avatars">
              {[9, 10, 1].map((n) => (
                <img key={n} src={`/assets/landing/avatar-${n}.png`} alt="" />
              ))}
            </div>
            <span>Sábado tem corrida no Parque • 3 vagas</span>
          </div>
        </div>
      </aside>

      <main className="auth__main">
        <form className="auth__form" onSubmit={(event) => onNavigate("home", event)}>
          <div className="auth__intro">
            <h1>Que bom te ver de novo!</h1>
            <p>Entre na sua conta Me Leva.</p>
          </div>

          <label className="field">
            <span>E-mail</span>
            <span className="field__box">
              <svg className="field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 6.5h16v11H4z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="m4.5 7.5 7.5 5 7.5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              <input type="email" placeholder="seuemail@exemplo.com" />
            </span>
          </label>

          <label className="field">
            <span>Senha</span>
            <span className="field__box">
              <svg className="field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M5 19.5c0-3.2 3-5.5 7-5.5s7 2.3 7 5.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <input type="password" placeholder="••••••••" />
            </span>
          </label>

          <div className="auth__row">
            <label className="remember">
              <input type="checkbox" defaultChecked />
              Lembrar de mim
            </label>
            <a className="auth__link" href="#recuperar-senha">
              Esqueci minha senha
            </a>
          </div>

          <button className="btn btn--gradient-reverse btn--block" type="submit">
            Entrar
          </button>

          <div className="divider">
            <span />
            ou
            <span />
          </div>

          <button className="btn btn--lilac btn--block" type="button">
            Continuar com Google
          </button>

          <p className="auth__foot">
            Ainda não tem conta?{" "}
            <a className="auth__link" href="#criar-conta">
              Criar conta
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}
