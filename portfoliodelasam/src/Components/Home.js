import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";


function Home ({ setRouteTo }) {
    return (
        <div className={styles.homeRoot}>
            <img className = {styles.flowerImage} src="flowerVine2.png" alt="white flowers"></img>
            <span className={styles.email}>sam.ban@gmail.com</span>
            <p className={styles.accent1}></p>
            <p className={styles.accent2}></p>
            <p className={styles.accent3}></p>
            <p className={styles.accent4}></p>
            <p className={styles.accent5}></p>
            <p className={styles.accent6}></p>
            <img className = {styles.flowerImage} src="flowerVine3.png" alt="white flowers"></img>
            <img className = {styles.flowerImage} src="flowerVine4.png" alt="white flowers"></img>
            <img className = {styles.flowerImage} src="flowerVine5.png" alt="white flowers"></img>
            <img className = {styles.flowerImage} src="flowerVine6.png" alt="white flowers"></img>
            <img className = {styles.flowerImage} src="flowerVine7.png" alt="white flowers"></img>
            <img className = {styles.flowerImage} src="flowerVine8.png" alt="white flowers"></img>
            <p className={styles.textExpand}>hello, my name is</p>

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