import React from "react";
import styles from './NavBar.module.css'

function NavBar () {
    const handleClick = () => {
        window.scrollTo({
          top: 1000, // the y-coordinate to scroll to
          behavior: 'smooth' // smooth scrolling animation
        });
      }

    return (
        <nav className={styles.barRoot}>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.01</span>
                <span onClick={handleClick} className={styles.navLink}>About me</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.02</span>
                <span className={styles.navLink}>Projects</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.03</span>
                <span className={styles.navLink}>Backdoor for hackers</span>
            </div>
            <div className={styles.linkWrapper}>
                <span className={styles.numbers}>.04</span>
                <span className={styles.navLink}>Resume</span>
            </div>
            {/* <button className={styles.button}>Resume</button> */}
        </nav>
    )
}

export default NavBar