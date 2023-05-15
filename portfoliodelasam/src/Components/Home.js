import React, { useState, useEffect } from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
import About from "./About";
import Projects from "./Projects";
import Contact from "./Recommendations";

function Home({ setRouteTo, rotateBox, setRotateBox, scrollPosition, setScrollPosition, isVisible, setIsVisible }) {
    const [mobileScroll, setMobileScroll] = useState(0)
    

    useEffect(() => {
        function handleScroll() {
            // if (window.innerWidth < 600) {
            //     // setScrollPosition(window.scrollY * (969/window.screen.height) - 75);
            // setScrollPosition(window.scrollY * (969/window.innerHeight) - 75); // Update the scroll position state
               
            // }
            // else {
            //    setScrollPosition(window.scrollY)
            // }
            
                // setScrollPosition(window.scrollY * (969/window.screen.height) - 75);
            setScrollPosition(window.scrollY * (969/window.innerHeight) - 75); // Update the scroll position state
               
            
            
        }
        window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    
    }, []);
    useEffect (() => {
        if (scrollPosition > 650) {
            setRotateBox(true)
        }
        if(scrollPosition < 650) {
            setRotateBox(false)
        }

    }, [scrollPosition])

    return (
        <>
            <div className={styles.homeRoot}>

            


                <div className={`${styles.emailWrapper}`}>
                    <img className={styles.flowerImage8} src="flowerVine5.png" alt="white flowers"></img>
                    <p className={`${styles.emailLine} ${styles.slideInTop}`}></p>
                    <a href="mailto:sam.ban@gmail.com" className={`${styles.email} ${styles.slideInTop}`}>sam.ban@gmail.com</a>
                </div>
                <div className={styles.megaWrapper}>
                    <div className={styles.centerWrapper}>
                        <span className={styles.borderTop}></span>
                        <p className={styles.textExpand}>hello, my name is,</p>
                        <p className={styles.nameText}>Samuel Banister</p>
                        <p className={styles.descriptionText}>I use code to build beautiful things. My cats are my best friends and they annoy the hell out of me. My wife keeps me tethered to planet earth.</p>
                        {/* <Link to='/loading' className={styles.penisLink}> */}
                        <a className={styles.featuredLink} href="https://hike-seek.onrender.com/" target="blank">
                            <button className={`${styles.button} ${styles.penisLink}`}
                            // onClick={() => {
                            //     setRouteTo('/about')
                            // }}
                            >Featured Project</button></a>
                        {/* </Link> */}
                        <span className={styles.borderBottom}></span>
                    </div>
                </div>
                
                <div className={rotateBox ? `${styles.bottomLeftAfter}` : `${styles.bottomLeftDiagonal}`}></div>

                {/* <img className = {styles.flowerImage3} src="flowerVine3.png" alt="white flowers"></img>
            <img className = {styles.flowerImage4} src="flowerVine4.png" alt="white flowers"></img>
            <img className = {styles.flowerImage5} src="flowerVine6.png" alt="white flowers"></img> */}
                {/* <img className = {styles.flowerImage6} src="flowerVine7.png" alt="white flowers"></img> */}
                <div className={styles.snowflakes} aria-hidden="true">
    
  <div className={styles.snowflake}>
  .
  </div>
  <div className={styles.snowflake}>
  .
  </div>
  <div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
  .
  </div>
  <div className={styles.snowflake}>
  .
  </div>
  <div className={styles.snowflake}>
  .
  </div>
  <div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
  .
  </div>
  {/* <div className={styles.snowflake}>
    .
  </div> */}
  {/* <div className={styles.snowflake}>
    .
  </div> */}
  {/* <div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div> */}
  {/* <div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div><div className={styles.snowflake}>
    .
  </div>
  <div className={styles.snowflake}>
    .
  </div> */}
</div>
 <hr className={styles.bottomHr}></hr>
 <div className={styles.bottomRightWrapper}>
                    {/* <span className={styles.email}>sam.ban@gmail.com</span> */}
                    <a rel = "noreferrer" href={"https://www.github.com/Samson343"} target="_blank" className={styles.slideInBottom}>
                    <FiGithub className={`${styles.socialIcons}`} 
                    
                    size={'2.2vh'} 
                    />
                    </a>
                    <a rel = "noreferrer" href={"https://www.codewars.com/users/Samson12345"} target="_blank" className={styles.slideInBottom}>
                    <SiCodewars className={`${styles.socialIcons}`} 
                    size={'1.9vh'} 
                    />
                    </a>
                    <a rel = "noreferrer" href={"https://www.linkedin.com/in/sam-banister/"} target="_blank" className={styles.slideInBottom}>
                    <AiFillLinkedin className={`${styles.socialIcons}`} 
                    size={'2.2vh'} 
                    />
                    </a>

                    <p className={`${styles.emailLine} ${styles.slideInBottom}`}></p>
                    <img className={styles.flowerImage7} src="flowerVine8.png" alt="white flowers"></img>
                </div>
            </div>
            <About
                scrollPosition={scrollPosition}
                isVisible = {isVisible} 
              setIsVisible = {setIsVisible}
            />
          
            
        </>
    )
}

export default Home