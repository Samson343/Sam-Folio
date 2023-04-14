import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styles from './About.module.css'


function About ({ setRouteTo, scrollPosition }) {
    return (
      <div className={styles.aboutRoot}>

      <div className={styles.aboutHeaderWrapper}>
          <h3 className={styles.aboutHeader}>
              <span className={styles.numbers}>.01</span >
              About me
          </h3>
          <span className={styles.aboutHeaderLine}></span>
      </div>
      <hr className={styles.aboutHr}></hr>
      <div className={styles.aboutBackground}>
          
          <p className={styles.aboutDescription}>
          <h3 className={styles.innerHeader}>I came here to build.</h3>
              I'm a career changer jumping into tech from a background of dietetics. Since I'm late to the party I know I have to show up bearing gifts to make up for it. That's why I study late into the night, get a handle on the bleeding edge of tech, and pour my heart into everything I create. </p>
          <div className={styles.listWrapper}>
              <ul className={styles.techList}> Frontend
                  <li className={styles.li}>React</li>
                  <li className={styles.li}>CSS</li>
                  <li className={styles.li}>HTML5</li>
              </ul>
              <ul className={styles.techList}> Backend
                  <li className={styles.li}>SQL</li>
                  <li className={styles.li}>Express</li>
                  <li className={styles.li}>Node</li>
              </ul>
          </div>
      </div>
      <img className={styles.aboutPicture} src="Sam-about9.jpg" alt="headshot"></img>
      <div className={styles.aboutPictureBackground}></div>


      {scrollPosition >= 700 &&
          <img className={styles.flowerImage2} src="flowerVine2.png" alt="white flowers"></img>
      }
       {/* <Link to = '/loading'>
              <button
                onClick={() => {
                    setRouteTo('/home')
                }}
              > Go home </button>
            </Link> */}
  </div>
           
        
    )
}

export default About