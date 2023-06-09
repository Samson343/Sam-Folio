import React, {useState} from "react";
import styles from './NavBar.module.css'


function NavBar ({ rotateBox, setRotateBox, target1Ref, target2Ref, target3Ref }) {
    
    const handleClick = (scrollHere) => {
       
        scrollHere = scrollHere * (window.innerHeight/969)
        
        window.scrollTo({
          top: scrollHere, // the y-coordinate to scroll to
          behavior: 'smooth' // smooth scrolling animation
            
        });
      }

    return (
        <nav className={styles.barRoot}>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.01</span>
                <span onClick={() => {
                    handleClick(1000)}} className={styles.navLink}>About me</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.02</span>
                <span onClick={() => {
                handleClick(2000)}} className={styles.navLink}>Projects</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.03</span>
                <span href="mailto:sam.ban@gmail.com" className={styles.navLink}
                  onClick={() => {
                handleClick(15000)}}
                >Get in touch</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.04</span>
                <a href = "../../Sam-Banister-FullStack-Resume.pdf" target = "_blank" className={styles.navLinkResume}>Resume</a>
            </div>
        </nav>
    )
}

export default NavBar