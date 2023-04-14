import React, { useState, useEffect } from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
import About from "./About";
import Projects from "./Projects";


function Home({ setRouteTo, rotateBox }) {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY); // Update the scroll position state
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
                    <span className={styles.borderTop}></span>
                    <p className={styles.textExpand}>hello, my name is,</p>
                    <p className={styles.nameText}>Samuel Banister</p>
                    <p className={styles.descriptionText}>Builder of websites, doer of things. My cats are my best friends and they annoy the hell out of me. My wife keeps me tethered to planet earth.</p>
                    {/* <Link to='/loading' className={styles.penisLink}> */}
                    <a className = {styles.featuredLink} href="https://hike-seek.onrender.com/" target="blank">
                        <button className={`${styles.button} ${styles.penisLink}`}
                        // onClick={() => {
                        //     setRouteTo('/about')
                        // }}
                        >Featured Project</button></a>
                    {/* </Link> */}
                    <span className={styles.borderBottom}></span>
                </div>

                <div className={styles.topLeftWrapper}>
                    {/* <span className={styles.email}>sam.ban@gmail.com</span> */}
                    <FiGithub className={`${styles.socialIcons} ${styles.slideInBottom}`} size={'2.3vmin'} />
                    <SiCodewars className={`${styles.socialIcons} ${styles.slideInBottom}`} size={'2vmin'} />
                    <AiFillLinkedin className={`${styles.socialIcons} ${styles.slideInBottom}`} size={'2.3vmin'} />

                    <p className={`${styles.emailLine} ${styles.slideInBottom}`}></p>
                    <img className={styles.flowerImage7} src="flowerVine8.png" alt="white flowers"></img>
                </div>
                <div className={rotateBox ? `${styles.bottomLeftAfter}` : `${styles.bottomLeftDiagonal}`}></div>

                {/* <img className = {styles.flowerImage3} src="flowerVine3.png" alt="white flowers"></img>
            <img className = {styles.flowerImage4} src="flowerVine4.png" alt="white flowers"></img>
            <img className = {styles.flowerImage5} src="flowerVine6.png" alt="white flowers"></img> */}
                {/* <img className = {styles.flowerImage6} src="flowerVine7.png" alt="white flowers"></img> */}

            </div>
            <About 
              scrollPosition = {scrollPosition}
            />
            <Projects/>
        </>
    )
}

export default Home