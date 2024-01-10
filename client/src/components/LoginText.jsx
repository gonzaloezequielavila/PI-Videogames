import React from "react";
import styles from './LoginText.module.css'
import { Link } from "react-router-dom";

const LoginText = () => {
  return (
    <div className= {styles.container}>
      <div>
        <div className={styles.inputs}>
          <a>
        Email: 
          </a>
        <input/>
        </div>

        <div className={styles.inputs}>
          <a>
        Password: 
          </a>
        <input/>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to='/home'>
        <button>Guest</button>
        </Link>
        <button>Log in</button>
      </div>

    </div>
  )
};

export default LoginText;