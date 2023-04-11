import React, { useState, useEffect } from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'


function Home({ setRouteTo }) {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    useEffect(() => {
        function handleScroll() {
          setScrollPosition(window.scrollY); // Update the scroll position state
          console.log("useEffect running")
        }
        window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <>
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
              <p className={styles.descriptionText}>Builder of websites, doer of things. My cats are my best friends and they annoy the hell out of me</p>
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
            <div className={`${styles.bottomLeftDiagonal}`}></div>

            {/* <img className = {styles.flowerImage3} src="flowerVine3.png" alt="white flowers"></img>
            <img className = {styles.flowerImage4} src="flowerVine4.png" alt="white flowers"></img>
            <img className = {styles.flowerImage5} src="flowerVine6.png" alt="white flowers"></img> */}
            {/* <img className = {styles.flowerImage6} src="flowerVine7.png" alt="white flowers"></img> */}
            
        </div>
        <div className={styles.aboutRoot}>

            <div className={styles.aboutBackground}>
                <p className={styles.aboutDescription}>I'm a career changer jumping into tech from a background of dietetics. Since I'm late to the party I know I have to show up with all the best part favors to make up for it. That's why I study late into the night, get a handle on the bleeding edge of tech, and pour my heart into everything I create. </p>
            </div>
            { scrollPosition >= 700 &&
              <img className = {styles.flowerImage2} src="flowerVine2.png" alt="white flowers"></img>
            }
        </div>
        </>
    )
}

export default Home