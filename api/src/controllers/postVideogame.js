const { Videogame } = require('../db');
const moment = require('moment')

const postVideogame = async (req, res) => {
  try {
    const {name, description, platforms, image, released, rating } = req.body;

    if (!name || !description || !platforms || !image || !released || !rating) {
      return res.status(400).json({ message: 'Information missing' });
    }

    const formattedDate = moment(released, 'DD/MM/YYYY').format('YYYY-MM-DD');

    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      released: formattedDate,
      rating,
    });

    return res.status(200).json(newVideogame);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postVideogame;
