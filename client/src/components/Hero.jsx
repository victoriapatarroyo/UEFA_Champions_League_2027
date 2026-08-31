import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      {/* Capa decorativa de fondo (líneas verticales tipo reflectores).
          aria-hidden="true" le dice a los lectores de pantalla que la ignoren,
          porque no aporta información, solo es decoración visual. */}
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">UEFA Champions League · 2026/27</p>

        <h1 className="hero__title">
          El camino
          <br />a <span className="hero__title-accent">Madrid</span>
        </h1>

        <p className="hero__subtitle">
          16 equipos entran a los playoffs de octavos. Uno solo levanta la
          Orejona en el Estadio Metropolitano. Aquí se van a cargar y seguir los
          resultados, ronda por ronda, hasta la final del 5 de junio de 2027.
        </p>

        <div className="hero__actions">
          {/* Este enlace baja a la sección de fases, que se va a
              construir en un paso más adelante (id="fases"). */}
          <a className="hero__cta hero__cta--primary" href="#fases">
            Ver las fases
          </a>

          {/* Este botón todavía no hace nada: el ingreso de resultados
              se va a construir en una fase posterior del proyecto. */}
          <a
            className="hero__cta hero__cta--ghost"
            href="#"
            aria-disabled="true"
          >
            Ingresar resultados
            <span className="hero__cta-tag">próximamente</span>
          </a>
        </div>
      </div>

      {/* Indicador animado abajo del todo, que invita a hacer scroll */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </header>
  );
}
