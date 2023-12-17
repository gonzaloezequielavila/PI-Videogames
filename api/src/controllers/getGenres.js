const {Genre} = require('../db');

const getGenres = async (req,res) => {
  try {
    const genres = await Genre.findAll();
    return res.status(200).send(genres);
  } catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = getGenres;