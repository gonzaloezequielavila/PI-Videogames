const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/videogames', getVideogames);
// router.get(`videogames/:idVideogame`);
// router.get('/videogames/name?=');
// router.post(`/videogames`);
// router.get(`/genres`);


module.exports = router;
