import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'


function Home({ setRouteTo }) {
    return (
        <div className={styles.homeRoot}>
            <div className={`${styles.emailWrapper}`}>
                <img className={styles.flowerImage8} src="flowerVine5.png" alt="white flowers"></img>
                
                    <p className={`${styles.emailLine} ${styles.slideInTop}`}></p>
                    <a href="mailto:sam.ban@gmail.com" className={`${styles.email} ${styles.slideInTop}`}>sam.ban@gmail.com</a>
                
            </div>
            <div className={styles.centerWrapper}>
              <span className= {styles.borderTop}></span>
              <p className={styles.textExpand}>hello, my name is,</p>
              <p className={styles.nameText}>Samuel Banister</p>
              <Link to='/loading' className={styles.penisLink}>
                <button className={styles.button}
                    onClick={() => {
                        setRouteTo('/about')
                    }}
                >See my Work</button>
            </Link>
              <span className= {styles.borderBottom}></span>
            </div>

    

            <div className={styles.topLeftWrapper}>
                {/* <span className={styles.email}>sam.ban@gmail.com</span> */}

                <FiGithub className={`${styles.socialIcons} ${styles.slideInBottom}`} size={'2.3vmin'} />
                <SiCodewars className={`${styles.socialIcons} ${styles.slideInBottom}`} size={'2vmin'} />
                <AiFillLinkedin className={`${styles.socialIcons} ${styles.slideInBottom}`} size={'2.3vmin'} />


                <p className={`${styles.emailLine} ${styles.slideInBottom}`}></p>
                <img className={styles.flowerImage7} src="flowerVine8.png" alt="white flowers"></img>
            </div>
            {/* <img className = {styles.flowerImage2} src="flowerVine2.png" alt="white flowers"></img> */}
            <p className={styles.accent1}></p>
            <p className={styles.accent2}></p>
            <p className={styles.accent3}></p>
            <p className={styles.accent4}></p>
            <p className={styles.accent5}></p>
            <p className={styles.accent6}></p>
            {/* <img className = {styles.flowerImage3} src="flowerVine3.png" alt="white flowers"></img> */}
            {/* <img className = {styles.flowerImage4} src="flowerVine4.png" alt="white flowers"></img> */}

            {/* <img className = {styles.flowerImage5} src="flowerVine6.png" alt="white flowers"></img> */}
            {/* <img className = {styles.flowerImage6} src="flowerVine7.png" alt="white flowers"></img> */}


        </div>

    )
}

export default Home