import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";


function Home ({ setRouteTo }) {
    return (
        <div className={styles.homeRoot}>
            <span className={styles.email}>sam.ban@gmail.com</span>
            <p className={styles.accent1}></p>
            <p className={styles.accent2}></p>
            <p className={styles.accent3}></p>
            <p className={styles.accent4}></p>
            <p className={styles.accent5}></p>
            <p className={styles.accent6}></p>
            
        <Link to = '/loading' className={styles.penisLink}>
              <button className={styles.button} 
                onClick={() => {
                  setRouteTo('/about')
                }}
              >touch my penis</button>
        </Link>

        </div>

    )
}

export default Home