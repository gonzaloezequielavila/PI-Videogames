const axios = require ('axios');
const {Videogame} = require('../db')
const API_KEY = '7961ae6b01304a3fae1351fa044255e9'
const URL = `https://api.rawg.io/api/games`
const localURL = 'http://localhost:3001'

// https://api.rawg.io/api/games?key=7961ae6b01304a3fae1351fa044255e9

const getVideogames = async (req, res) => {
  // try{
    // const url = `${URL}?key=${API_KEY}`
    // const { data } = await axios(url);
  try {
    const videogames = await Videogame.findAll();
    return res.status(200).send(videogames);
  } catch(error){
    res.status(500).json({error:error.message})
  }





  //   const { data } = axios(`${localURL}/videogames`)
    
  //   const {name, description, platforms, image, released, rating} = data;
  //   const videogame = {name, description, platforms, image, released, rating}

  //   return (videogame.name)
  //   ? res.status(200).json(videogame)
  //   : res.status(404).send('No videogame found')
  // } catch (error){
  //   res.status(500).send(error.message)
  // }
}

module.exports = getVideogames;