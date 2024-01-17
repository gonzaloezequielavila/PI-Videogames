import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './Card.module.css'

const Card = () => {

  const {id} = useParams();
  const [videogameDetail, setVideogameDetail] = useState({})

  const apiEndPoint = `http://localhost:3001/videogames/`

  useEffect(()=> {
    axios.get(`${apiEndPoint}${id}`)
    .then(({data}) => {
      if(data){
        setVideogameDetail(data)
      } else {
        window.alert(`There's no game with that id`)
      }
    });
    return setVideogameDetail({});
  }, [id])


  return (
    <div className={styles.container}>
      <h1>Name: {videogameDetail.name}</h1>
      <div className={styles.card}>
      <h3>{videogameDetail.image}</h3>
      <h3>Description: {videogameDetail.description}</h3>
      <h3>Platforms: {videogameDetail.platforms}</h3>
      <h3>Date Released{videogameDetail.released}</h3>
      <h3>Rating: {videogameDetail.rating}</h3>
      </div>
    </div>
  )
}


export default Card;