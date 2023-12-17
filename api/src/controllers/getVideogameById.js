const {Videogame} = require('../db')

const getVideogameById = async (req, res) => {

  try{
    const id = req.params.id
    const videogame = await Videogame.findByPk(id);
    return res.status(200).json(videogame);  
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = getVideogameById;