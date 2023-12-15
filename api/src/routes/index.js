const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames')
const postVideogame = require('../controllers/postVideogame')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/videogames', getVideogames);
// router.get(`videogames/:idVideogame`);
// router.get('/videogames/name?=');
router.post(`/videogames`, postVideogame);
// router.get(`/genres`);


module.exports = router;
