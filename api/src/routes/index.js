const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames')
const postVideogame = require('../controllers/postVideogame')
const postGenre = require('../controllers/postGenre')
const getGenres = require('../controllers/getGenres')
const getVideogameById = require('../controllers/getVideogameById')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/videogames', getVideogames);
router.get(`/videogames/:id`, getVideogameById);
// router.get('/videogames/name?=');
router.post(`/videogames`, postVideogame);
router.post(`/genres`, postGenre)
router.get(`/genres`, getGenres);


module.exports = router;
