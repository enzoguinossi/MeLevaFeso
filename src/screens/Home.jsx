import AppShell from "../components/AppShell.jsx";
import { Icon } from "../icons.jsx";

const upcoming = [
  {
    sport: "Corrida",
    title: "Corrida no Parque",
    image: "/assets/app/atividade-parque.png",
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
    weather: "16°C • 20% de chuva",
    spots: "4/8 vagas",
    level: "Avançado",
    tone: "pink",
    hot: true,
    people: [4, 5, 6],
  },
  {
    sport: "Futebol",
    title: "Futebol Society",
    image: "/assets/landing/esporte-futebol.png",
    date: "Sex, 16 out • 19h",
    place: "Várzea • 3,4 km",
    weather: "19°C • 70% de chuva",
    spots: "Lotada • 10/10",
    level: "Intermediário",
    tone: "blue",
    hot: false,
    people: [7, 8, 9],
  },
];

const recommendations = [
  {
    title: "Beach tênis no Clube",
    image: "/assets/app/atividade-beach-tenis.png",
    when: "Hoje • 17h",
    place: "Comary • 800 m",
    level: "Iniciante",
    tone: "green",
  },
  {
    title: "Yoga ao ar livre",
    image: "/assets/landing/atividade-yoga.png",
    when: "Hoje • 18h",
    place: "Centro • 1,5 km",
    level: "Todos os níveis",
    tone: "lilac",
  },
  {
    title: "Pedal Teresópolis",
    image: "/assets/app/atividade-pedal.png",
    when: "Amanhã • 07h",
    place: "Várzea • 2,1 km",
    level: "Intermediário",
    tone: "blue",
  },
  {
    title: "Treino Funcional",
    image: "/assets/app/atividade-funcional.png",
    when: "Amanhã • 18h",
    place: "Centro • 1,2 km",
    level: "Todos os níveis",
    tone: "lilac",
  },
];

const week = [
  { day: "S", height: 30 },
  { day: "T", height: 92, active: true },
  { day: "Q", height: 30 },
  { day: "Q", height: 60, active: true },
  { day: "S", height: 30 },
  { day: "S", height: 100, active: true },
  { day: "D", height: 30 },
];

const challenges = [
  { icon: Icon.flame, title: "5K em outubro", progress: 62 },
  { icon: Icon.bike, title: "Semana de bike", progress: 40 },
  { icon: Icon.leaf, title: "7 dias de movimento", progress: 28 },
];

const people = [
  { name: "Lucas Andrade", sports: "Corrida • Ciclismo", avatar: 9 },
  { name: "Camila Rocha", sports: "Yoga • Trilha", avatar: 6 },
  { name: "Rafael Lima", sports: "Futebol • Corrida", avatar: 7 },
];

function MapArt() {
  return (
    <svg className="map" viewBox="0 0 318 180" role="img" aria-label="Mapa das atividades perto de você">
      <rect width="318" height="180" rx="14" fill="#eef4ec" />
      <g stroke="#d8e7d3" strokeWidth="8">
        <path d="M-10 60h340M-10 130h340M70 -10v200M180 -10v200M260 -10v200" />
      </g>
      <g stroke="#ffffff" strokeWidth="4">
        <path d="M-10 60h340M-10 130h340M70 -10v200M180 -10v200M260 -10v200" />
      </g>
      <path d="M0 100c60 15 120 10 180 0s120-5 160 8" stroke="#d9ead6" strokeWidth="10" fill="none" />
      <g fill="#e91b7a">
        <circle cx="96" cy="52" r="5" />
        <circle cx="96" cy="52" r="11" fill="#fbe1f0" opacity="0.7" />
        <circle cx="232" cy="48" r="5" />
        <circle cx="232" cy="48" r="11" fill="#fbe1f0" opacity="0.7" />
        <circle cx="150" cy="118" r="5" />
        <circle cx="150" cy="118" r="11" fill="#fbe1f0" opacity="0.7" />
        <circle cx="268" cy="126" r="5" />
        <circle cx="268" cy="126" r="11" fill="#fbe1f0" opacity="0.7" />
      </g>
      <circle cx="196" cy="92" r="7" fill="#6a2bc0" stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

export default function Home({ onNavigate }) {
  return (
    <AppShell active="home" onNavigate={onNavigate}>
      <div className="home">
        <div className="home__main">
          <section className="hi">
            <div className="hi__text">
              <span className="hi__badge">
                {Icon.flame}
                12 atividades perto de você esta semana
              </span>
              <h1>
                Bom dia, Mariana!
                <br />
                Bora se movimentar hoje?
              </h1>
              <p>Encontre gente com o mesmo ritmo que o seu e transforme o treino em encontro.</p>
              <div className="hi__actions">
                <a className="btn btn--white" href="#explorar">
                  Explorar atividades
                  {Icon.arrowRight}
                </a>
                <a className="btn btn--outline-white" href="#criar">
                  {Icon.plus}
                  Criar atividade
                </a>
              </div>
            </div>
            <img className="hi__img" src="/assets/app/hero-inicio.png" alt="" />
          </section>

          <div className="chips">
            {["Todas", "Corrida", "Trilha", "Ciclismo", "Futebol", "Yoga", "Vôlei", "Beach tênis", "Tênis", "Natação"].map(
              (chip, index) => (
                <button className={index === 0 ? "chip chip--active" : "chip"} type="button" key={chip}>
                  {chip}
                </button>
              ),
            )}
            <button className="chip chip--filter" type="button">
              {Icon.filter}
              Filtros
            </button>
          </div>

          <section className="block">
            <div className="block__head">
              <h2>Próximas atividades</h2>
              <a className="link" href="#atividades">
                Ver todas
                {Icon.arrowRight}
              </a>
            </div>

            <div className="activities activities--app">
              {upcoming.map((activity) => (
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

          <section className="block">
            <div className="block__head">
              <h2>Recomendadas para você</h2>
              <a className="link" href="#recomendadas">
                Ver mais
                {Icon.arrowRight}
              </a>
            </div>

            <div className="recs">
              {recommendations.map((item) => (
                <article className="rec" key={item.title}>
                  <img src={item.image} alt="" />
                  <div className="rec__info">
                    <h3>{item.title}</h3>
                    <p>
                      {Icon.clock}
                      {item.when}
                    </p>
                    <p>
                      {Icon.mapPin}
                      {item.place}
                    </p>
                    <span className={`tag tag--${item.tone}`}>{item.level}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="home__side">
          <section className="panel">
            <header className="panel__head">
              <h2>Sua semana</h2>
              <span className="panel__trophy">{Icon.trophy}</span>
            </header>

            <div className="week-stats">
              <div>
                <strong>2</strong>
                <span>atividades</span>
              </div>
              <div>
                <strong>8,4 km</strong>
                <span>percorridos</span>
              </div>
              <div>
                <strong>3 dias</strong>
                <span>seguidos</span>
              </div>
            </div>

            <div className="week-chart">
              {week.map((bar, index) => (
                <div className="week-chart__col" key={`${bar.day}-${index}`}>
                  <span
                    className={bar.active ? "week-chart__bar week-chart__bar--on" : "week-chart__bar"}
                    style={{ height: `${bar.height}%` }}
                  />
                  <small>{bar.day}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <header className="panel__head">
              <h2>Perto de você</h2>
              <a className="link" href="#mapa">
                Ver no mapa
                {Icon.arrowRight}
              </a>
            </header>

            <MapArt />

            <div className="legend">
              <span>
                <i className="dot dot--rose" />4 atividades
              </span>
              <span>
                <i className="dot dot--purple" />
                Você
              </span>
            </div>
          </section>

          <section className="panel">
            <header className="panel__head">
              <h2>Desafios da semana</h2>
            </header>

            <div className="challenges">
              {challenges.map((challenge) => (
                <div className="challenge" key={challenge.title}>
                  <span className="challenge__icon">{challenge.icon}</span>
                  <div className="challenge__body">
                    <div className="challenge__row">
                      <strong>{challenge.title}</strong>
                      <span>{challenge.progress}%</span>
                    </div>
                    <div className="progress">
                      <span style={{ width: `${challenge.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <header className="panel__head">
              <h2>Pessoas com interesses parecidos</h2>
            </header>

            <div className="people-list">
              {people.map((person) => (
                <div className="person" key={person.name}>
                  <img src={`/assets/landing/avatar-${person.avatar}.png`} alt="" />
                  <div className="person__info">
                    <strong>{person.name}</strong>
                    <span>{person.sports}</span>
                  </div>
                  <button className="btn btn--ghost btn--sm" type="button">
                    Conectar
                  </button>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </AppShell>
  );
}
