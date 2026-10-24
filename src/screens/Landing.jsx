import { Icon } from "../icons.jsx";

const sports = [
  { name: "Corrida", count: 42, image: "/assets/landing/esporte-corrida.png" },
  { name: "Trilha", count: 18, image: "/assets/landing/esporte-trilha.png" },
  { name: "Ciclismo", count: 23, image: "/assets/landing/esporte-ciclismo.png" },
  { name: "Futebol", count: 31, image: "/assets/landing/esporte-futebol.png" },
  { name: "Yoga", count: 12, image: "/assets/landing/esporte-yoga.png" },
  { name: "Vôlei", count: 9, image: "/assets/landing/esporte-volei.png" },
  { name: "Beach tênis", count: 15, image: "/assets/landing/esporte-beach-tenis.png" },
  { name: "Natação", count: 7, image: "/assets/landing/esporte-natacao.png" },
];

const activities = [
  {
    sport: "Corrida",
    title: "Corrida no Parque",
    image: "/assets/landing/atividade-corrida.png",
    date: "Sáb, 17 out • 07h",
    place: "Centro • 1,2 km",
    weather: "22°C • céu limpo",
    spots: "3/6 vagas",
    level: "Iniciante",
    tone: "green",
    hot: true,
    people: [1, 2, 3],
  },
  {
    sport: "Trilha",
    title: "Trilha Pedra do Sino",
    image: "/assets/landing/atividade-trilha.png",
    date: "Dom, 18 out • 06h",
    place: "Alto • 8 km",
    weather: "18°C • 20% de chuva",
    spots: "4/8 vagas",
    level: "Avançado",
    tone: "pink",
    hot: true,
    people: [4, 5, 6],
  },
  {
    sport: "Yoga",
    title: "Yoga ao ar livre",
    image: "/assets/landing/atividade-yoga.png",
    date: "Qua, 21 out • 18h",
    place: "Centro • 1,5 km",
    weather: "21°C • parcialmente nublado",
    spots: "6/12 vagas",
    level: "Todos os níveis",
    tone: "lilac",
    hot: false,
    people: [7, 8, 9],
  },
];

const steps = [
  {
    number: "01",
    icon: Icon.user,
    title: "Escolha seus esportes",
    text: "Conte o que você gosta de praticar, seu nível e quando costuma ter tempo livre.",
  },
  {
    number: "02",
    icon: Icon.search,
    title: "Encontre uma atividade",
    text: "Veja o que está rolando perto de você e filtre por esporte, dia, horário e nível.",
  },
  {
    number: "03",
    icon: Icon.users,
    title: "Participe e conheça gente",
    text: "Garanta sua vaga, combine no chat e vá praticar com quem tem o mesmo ritmo.",
  },
];

export default function Landing({ onNavigate }) {
  return (
    <div className="page">
      <header className="nav">
        <a className="logo" href="#">
          Me <span>Leva</span>
        </a>
        <nav className="nav__links">
          <a href="#como-funciona">Como funciona</a>
          <a href="#atividades">Atividades</a>
          <a href="#esportes">Esportes</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <div className="nav__actions">
          <a className="btn btn--ghost" href="#entrar" onClick={(event) => onNavigate("login", event)}>
            Entrar
          </a>
          <a className="btn btn--gradient" href="#criar-conta">
            Criar conta
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero__text">
          <span className="badge">
            <span className="badge__icon">{Icon.pin}</span>
            Agora em Teresópolis, RJ
          </span>

          <h1>
            Encontre gente pra
            <br />
            praticar o esporte que
            <br />
            <span className="text-rose">você ama.</span>
          </h1>

          <p className="hero__lead">
            O Me Leva conecta você a pessoas e atividades esportivas perto de casa — no lugar,
            no horário e no nível que fazem sentido pra você.
          </p>

          <div className="hero__actions">
            <a className="btn btn--gradient btn--lg" href="#criar-conta">
              Começar agora
              {Icon.arrowRight}
            </a>
            <a
              className="btn btn--ghost btn--lg"
              href="#entrar"
              onClick={(event) => onNavigate("login", event)}
            >
              Já tenho conta
            </a>
          </div>

          <div className="people">
            <div className="people__avatars">
              {[1, 2, 3, 4].map((n) => (
                <img key={n} src={`/assets/landing/avatar-${n}.png`} alt="" />
              ))}
            </div>
            <p>
              <strong>+1.200 pessoas</strong>
              <span>já se movimentando juntas</span>
            </p>
          </div>
        </div>

        <div className="collage">
          <img className="collage__main" src="/assets/landing/hero-main.png" alt="" />
          <img className="collage__small" src="/assets/landing/hero-small.png" alt="" />

          <div className="notice">
            <img src="/assets/landing/avatar-5.png" alt="" />
            <p>
              <strong>Camila entrou na sua trilha!</strong>
              <span>Trilha Pedra do Sino • Dom 06h</span>
            </p>
          </div>

          <div className="mini-card">
            <div className="mini-card__head">
              <span className="mini-card__tag">
                <span className="badge__icon">{Icon.spark}</span>
                Corrida no Parque
              </span>
              <div className="mini-card__avatars">
                {[6, 7, 8].map((n) => (
                  <img key={n} src={`/assets/landing/avatar-${n}.png`} alt="" />
                ))}
                <span>+3</span>
              </div>
            </div>
            <p className="mini-card__meta">Sáb, 17 out • 07h • 1,2 km</p>
            <span className="mini-card__spots">3 vagas restantes</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats__inner">
          <div className="stat">
            <span className="stat__icon">{Icon.calendar}</span>
            <p>
              <strong>+120</strong>
              <span>atividades por semana</span>
            </p>
          </div>
          <div className="stat">
            <span className="stat__icon">{Icon.trophy}</span>
            <p>
              <strong>15</strong>
              <span>esportes diferentes</span>
            </p>
          </div>
          <div className="stat">
            <span className="stat__icon">{Icon.mapPin}</span>
            <p>
              <strong>3,2 km</strong>
              <span>distância média até você</span>
            </p>
          </div>
          <div className="stat">
            <span className="stat__icon">{Icon.heart}</span>
            <p>
              <strong>4,8 de 5</strong>
              <span>avaliação dos encontros</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="como-funciona">
        <div className="section__head">
          <h2>Como funciona</h2>
          <p>Do “queria ir” ao “bora?” em três passos.</p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <article className={index === 1 ? "step step--active" : "step"} key={step.number}>
              <span className="step__number">{step.number}</span>
              <span className="step__icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="esportes">
        <div className="section__head">
          <h2>Encontre seu esporte</h2>
          <p>Do pedal de domingo ao futebol depois do trabalho.</p>
        </div>

        <div className="sports">
          {sports.map((sport) => (
            <a className="sport" href="#esportes" key={sport.name}>
              <img src={sport.image} alt="" />
              <div className="sport__text">
                <strong>{sport.name}</strong>
                <span>{sport.count} atividades</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="atividades">
        <div className="section__head section__head--row">
          <div>
            <h2>Veja o que já está rolando</h2>
            <p>Atividades com vagas abertas esta semana.</p>
          </div>
          <a className="link" href="#atividades">
            Ver todas
            {Icon.arrowRight}
          </a>
        </div>

        <div className="activities">
          {activities.map((activity) => (
            <article className="activity" key={activity.title}>
              <div className="activity__cover">
                <img src={activity.image} alt="" />
                {activity.hot && <span className="tag tag--hot">Em alta</span>}
                <button className="activity__favorite" aria-label="Favoritar">
                  {Icon.heart}
                </button>
              </div>

              <div className="activity__body">
                <span className="activity__sport">{activity.sport}</span>
                <h3>{activity.title}</h3>

                <ul className="activity__meta">
                  <li>
                    {Icon.calendar}
                    {activity.date}
                  </li>
                  <li>
                    {Icon.mapPin}
                    {activity.place}
                  </li>
                  <li>
                    {Icon.sun}
                    {activity.weather}
                  </li>
                </ul>
              </div>

              <div className="activity__footer">
                <div className="activity__people">
                  <div className="people__avatars people__avatars--sm">
                    {activity.people.map((n) => (
                      <img key={n} src={`/assets/landing/avatar-${n}.png`} alt="" />
                    ))}
                  </div>
                  <span>{activity.spots}</span>
                </div>
                <span className={`tag tag--${activity.tone}`}>{activity.level}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta__box">
          <div>
            <h2>Pronto pra se movimentar?</h2>
            <p>Crie sua conta grátis e encontre sua próxima atividade em minutos.</p>
          </div>
          <div className="cta__actions">
            <a className="btn btn--white" href="#criar-conta">
              {Icon.arrowRight}
              Criar minha conta
            </a>
            <a className="btn btn--outline-white" href="#atividades">
              Explorar atividades
            </a>
          </div>
        </div>
      </section>

      <footer className="footer" id="sobre">
        <a className="logo logo--sm" href="#">
          Me <span>Leva</span>
        </a>
        <p>Projeto MVP Front-end • Teresópolis, RJ • 2026</p>
        <nav className="footer__links">
          <a href="#termos">Termos</a>
          <a href="#privacidade">Privacidade</a>
          <a href="#contato">Contato</a>
        </nav>
      </footer>
    </div>
  );
}
