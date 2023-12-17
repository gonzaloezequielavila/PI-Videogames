const {Genre} = require('../db')

const postGenre = async (req,res) => {
  try {
    const {name} = req.body;
    if (!name) return res.status(400).json({message: `Genre's name is missing`})

    const newGenre = await Genre.create({name})
    return res.status(200).json(newGenre)
  } catch(error){
    res.status(400).json({error: error.message})
  }
}

module.exports = postGenre;