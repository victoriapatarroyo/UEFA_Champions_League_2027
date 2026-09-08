const express = require("express");
const cors = require("cors");
const phasesRouter = require("./routes/phases");

// Creamos la aplicación de Express. A partir de aquí, "app" es
// el servidor: le vamos a ir agregando configuración y rutas.
const app = express();

// El puerto en el que va a escuchar el servidor. Si existe una
// variable de entorno PORT (por ejemplo, en un servicio de hosting
// que asigna su propio puerto), se usa esa; si no, se usa 4000.
const PORT = process.env.PORT || 4000;

// Activa CORS para todas las rutas, permitiendo que el frontend
// (en otro puerto) le pueda hacer pedidos a este servidor.
app.use(cors());

// Permite que Express entienda automáticamente el cuerpo de los
// pedidos que llegan en formato JSON (se va a necesitar más
// adelante, cuando se pueda enviar un pronóstico desde el frontend).
app.use(express.json());

// Ruta simple para confirmar que el servidor está corriendo.
// Al visitar http://localhost:4000/api/health en el navegador
// se debería ver esta respuesta.
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "champions-tracker-api" });
});

// Conecta el router de fases: todo lo que llegue a una URL que
// empiece con "/api/phases" se maneja con lo que se definió en
// routes/phases.js.
app.use("/api/phases", phasesRouter);

// Pone el servidor a escuchar pedidos en el puerto definido.
// La función que se le pasa se ejecuta una sola vez, apenas
// el servidor arranca correctamente.
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
