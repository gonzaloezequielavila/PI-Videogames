import React  from "react";
import styles from './Detail.module.css'

const Detail = () => {
  return(
    <div className={styles.container}>
    <h1>Game Name (Detail)</h1>
    <div className={styles.card}>
      <h3>IMAGE</h3>
      <h3>description</h3>
      <h3>Platforms</h3>
      <h3>Release Date</h3>
      <h3>Rating</h3>
    </div>

    </div>
  )
};

export default Detail;