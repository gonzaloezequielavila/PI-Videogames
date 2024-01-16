import React from "react";
import styles from './NewGame.module.css'

const NewGame = () => {

  const message = () =>{
    alert('This button will create a new game')
  }
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input className={styles.input} name='name' placeholder='Name'/>
        <input className={styles.input} name='description' placeholder='Description'/>
        <input className={styles.input} name='platforms' placeholder='Platforms'/>
        <input className={styles.input} name='image' placeholder='Image'/>
        <input className={styles.input} name='released' placeholder='Released Date'/>
        <input className={styles.input} name='rating' placeholder='Rating'/>
        <button className={styles.button} onClick={message}>Create</button>
      </form>
    </div>
  )
}

export default NewGame;