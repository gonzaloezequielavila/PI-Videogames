import React, {useEffect, useState}  from "react";
import styles from './Detail.module.css';
import axios from 'axios';
import { useParams } from "react-router-dom";


const Detail = () => {

  const {id} = useParams();
  const [videogameDetail, setVideogameDetail] = useState({})

  // useEffect(()=> {
  //   axios.get(`http://localhost:3001/videogames/${id}`)
  //   .then(({data}) => {
  //     if (data.name) {
  //       setCharacterDetail(data)
  //     }else {
  //       window.alert(`There's no game with that id`)
  //     }
  //   });
  //   return setCharacterDetail({});
  // }, [id])

  const apiEndPoint = `http://localhost:3001/videogames/`

  useEffect(()=> {
    axios.get(`${apiEndPoint}${id}`)
    .then(({data}) => {
      if(data.name){
        setVideogameDetail(data)
      } else {
        window.alert(`There's no game with that id`)
      }
    });
    return setVideogameDetail({});
  }, [id])


  return(
    <div className={styles.container}>
    <h1>{videogameDetail.name}</h1>
    <div className={styles.card}>
      <h3>{videogameDetail.image}</h3>
      <h3>{videogameDetail.description}</h3>
      <h3>{videogameDetail.platforms}</h3>
      <h3>{videogameDetail.released}</h3>
      <h3>{videogameDetail.rating}</h3>
    </div>

    </div>
  )
};

export default Detail;