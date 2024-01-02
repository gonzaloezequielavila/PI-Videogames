const {Videogame} = require('../db');
const {Op} = require('sequelize')

const getVideogamesByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) return res.status(400).json('A value is needed');

    const videogames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 15,
    });

    res.status(200).json(videogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = getVideogamesByName