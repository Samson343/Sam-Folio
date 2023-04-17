import React, {useState} from "react";
import styles from './NavBar.module.css'


function NavBar ({ rotateBox, setRotateBox }) {
    
    const handleClick = (scrollHere) => {
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
                    
                        // console.log("rotate box", rotateBox)
                        //     rotateBox ? 
                        //     setRotateBox(false) :
                        //     setRotateBox(true)
                    handleClick(1000)}} className={styles.navLink}>About me</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.02</span>
                <span onClick={() => {
                    
                    // console.log("rotate box", rotateBox)
                    //     rotateBox ? 
                    //     setRotateBox(false) :
                    //     setRotateBox(true)
                handleClick(2000)}} className={styles.navLink}>Projects</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.03</span>
                <span className={styles.navLink}>Backdoor for hackers</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.04</span>
                <a href = "../../Sam-Banister-FullStack-Resume.pdf" target = "_blank" className={styles.navLinkResume}>Resume</a>
            </div>
            {/* <button className={styles.button}>Resume</button> */}
        </nav>
    )
}

export default NavBar