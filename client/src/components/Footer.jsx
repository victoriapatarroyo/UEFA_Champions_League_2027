import "./Footer.css";

// Componente simple, sin recibir ninguna información desde afuera
// (no tiene props), porque el texto que muestra siempre es el mismo.
export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Camino a Madrid · seguimiento no oficial de la Champions League 2026/27
      </p>
      <p className="footer__muted">Hecho con React + Node.js</p>
    </footer>
  );
}
