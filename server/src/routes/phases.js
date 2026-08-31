const express = require("express");
const router = express.Router();
const phases = require("../data/phases");

// GET /api/phases
// Devuelve la lista completa de las 5 fases, tal como están
// en data/phases.js. Es la ruta que va a usar el frontend
// para mostrar toda la línea de tiempo.
router.get("/", (req, res) => {
  res.json(phases);
});

// GET /api/phases/:id
// Devuelve una sola fase, buscándola por su id (ejemplo: "final").
// ":id" es un "parámetro de ruta": una parte variable de la URL
// que Express captura y pone disponible en req.params.id.
router.get("/:id", (req, res) => {
  const phase = phases.find((p) => p.id === req.params.id);

  // Si ninguna fase tiene ese id, respondemos con error 404
  // ("no encontrado") en vez de devolver algo vacío sin explicación.
  if (!phase) {
    return res.status(404).json({ error: "Fase no encontrada" });
  }

  res.json(phase);
});

module.exports = router;
