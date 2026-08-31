import { useEffect, useRef, useState } from "react";

// Este hook responde una sola pregunta: "¿este elemento ya está visible en pantalla?"
// Se usa en cada tarjeta (Playoffs, Octavos, etc.) para que aparezcan
// con una animación cuando el usuario hace scroll y las va viendo.
export function useInView(options = { threshold: 0.35 }) {
  // ref = una especie de "etiqueta" que se conecta a un <div> del componente
  // que use este hook. Gracias a esto se puede acceder al elemento HTML real.
  const ref = useRef(null);

  // inView = arranca en false ("todavía no se vio") y en algún momento
  // pasa a true ("ya se vio, mostrar la animación").
  const [inView, setInView] = useState(false);

  // useEffect ejecuta código "por fuera" del render normal de React,
  // en este caso apenas el componente aparece en pantalla.
  useEffect(() => {
    // node = el elemento HTML real al que está conectado el ref.
    const node = ref.current;

    // Si por algún motivo el ref todavía no está conectado a nada, no se hace nada.
    if (!node) return;

    // IntersectionObserver es una herramienta del navegador (no de React)
    // que vigila un elemento y avisa cuando entra o sale de la pantalla.
    // Es mucho más eficiente que calcular posiciones a mano cada vez
    // que el usuario hace scroll.
    const observer = new IntersectionObserver(([entry]) => {
      // entry.isIntersecting = true apenas el elemento se hace visible
      // (según el porcentaje definido en "threshold").
      if (entry.isIntersecting) {
        setInView(true); // marca "ya se vio"

        // Deja de vigilar este elemento: la animación solo debe pasar
        // una vez, no cada vez que el usuario sube y baja la página.
        observer.unobserve(node);
      }
    }, options);

    // Le dice al observer "empezá a vigilar este elemento puntual".
    observer.observe(node);

    // Esta función se ejecuta si el componente desaparece de la página
    // (por ejemplo, el usuario navega a otro lado). Apaga el observer
    // para no dejar procesos corriendo de más y desperdiciando memoria.
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // el array vacío [] significa "ejecutar este efecto una sola vez"

  // Devuelve dos cosas juntas: el ref (para conectarlo a un <div>)
  // y el booleano inView (para saber si ya mostrar la animación).
  // Se usa así en otro componente:
  //   const [ref, inView] = useInView();
  //   <div ref={ref} className={inView ? "visible" : ""}>
  return [ref, inView];
}
