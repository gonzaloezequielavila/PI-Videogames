import React from 'react';
import styles from './Home.module.css'

const Home = () => {
  return(
    <div className={styles.container}>
      <h1>This is the home page</h1>
      <div className={styles.searchBar}>
        <input></input>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Home;