const axios = require ('axios');
const API_KEY = '7961ae6b01304a3fae1351fa044255e9'
const URL = `https://api.rawg.io/api/games`

// https://api.rawg.io/api/games?key=7961ae6b01304a3fae1351fa044255e9

const getVideogames = async (req, res) => {
  try{
    const url = `${URL}?key=${API_KEY}`
    const { data } = await axios(url);
    console.log(data);
  } catch (error){
    res.status(500).send('Nope')
  }
}

module.exports = getVideogames;