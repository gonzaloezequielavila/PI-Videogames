import React from "react";
import styles from './Nav.module.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return(
    <div className={styles.container}>
    {/* <h1>This is the navBar</h1> */}
    <div className={styles.buttonContainer}>
    <Link to='/'>
      <button className={styles.button}>Landing</button>
    </Link>
    <Link to='/home'>
      <button className={styles.button}>Home</button>
    </Link>
    <Link to='/detail'>
      <button className={styles.button}>Detail</button>
    </Link>
    <Link to='/newgame'>
      <button className={styles.button}>New Game</button>
    </Link>

    </div>
    </div>
  )
}

export default Nav;