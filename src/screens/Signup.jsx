import { Icon } from "../icons.jsx";

const benefits = [
  "Atividades perto de casa, no seu horário",
  "Gente do seu nível — do iniciante ao avançado",
  "Grátis pra criar e participar",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12.5 4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Signup({ onNavigate }) {
  return (
    <div className="signup">
      <form className="signup__form" onSubmit={(event) => onNavigate("home", event)}>
        <div className="auth__intro signup__intro">
          <h1>Crie sua conta</h1>
          <p>Leva menos de 1 minuto. Depois você escolhe seus esportes.</p>
        </div>

        <label className="field">
          <span>Nome completo</span>
          <span className="field__box">
            <span className="field__icon">{Icon.user}</span>
            <input type="text" placeholder="Mariana Souza" autoComplete="name" />
          </span>
        </label>

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
            <input type="email" placeholder="mariana@unifeso.com.vc" autoComplete="email" />
          </span>
        </label>

        <div className="signup__passwords">
          <label className="field">
            <span>Senha</span>
            <span className="field__box">
              <input type="password" placeholder="••••••••" autoComplete="new-password" />
            </span>
          </label>

          <label className="field">
            <span>Confirmar senha</span>
            <span className="field__box">
              <input type="password" placeholder="••••••••" autoComplete="new-password" />
            </span>
          </label>
        </div>

        <p className="signup__strength">
          <span className="signup__strength-icon">
            <Check />
          </span>
          Senha forte: 8+ caracteres, com número e símbolo
        </p>

        <label className="signup__terms">
          <input type="checkbox" defaultChecked />
          <span>
            Li e concordo com os <a href="#termos">Termos de uso</a> e a{" "}
            <a href="#privacidade">Política de privacidade</a>.
          </span>
        </label>

        <button className="btn btn--gradient-reverse btn--block" type="submit">
          {Icon.arrowRight}
          Continuar
        </button>

        <div className="divider">
          <span />
          ou
          <span />
        </div>

        <button className="btn btn--lilac btn--block" type="button">
          Cadastrar com Google
        </button>

        <p className="auth__foot">
          Já tem conta?{" "}
          <a className="auth__link" href="#/login" onClick={(event) => onNavigate("login", event)}>
            Entrar
          </a>
        </p>
      </form>

      <aside className="signup__visual">
        <img className="signup__photo" src="/assets/app/cadastro-hero.jpg" alt="" />
        <div className="signup__overlay" />

        <div className="signup__benefits">
          <h2>Seu próximo time está a um cadastro de distância.</h2>
          <ul>
            {benefits.map((benefit) => (
              <li className="signup__benefit" key={benefit}>
                <span className="signup__benefit-icon">
                  <Check />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
