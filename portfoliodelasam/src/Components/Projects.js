import React from "react";
import styles from './Projects.module.css'

function Projects() {
    return (
        <div className={styles.projectsRoot}>
            <div className={styles.aboutRoot}>

                <div className={styles.aboutHeaderWrapper}>
                    <h3 className={styles.aboutHeader}>
                        <span className={styles.numbers}>.02</span >
                        Projects
                    </h3>
                    <span className={styles.aboutHeaderLine}></span>
                </div>
                <hr className={styles.aboutHr}></hr>
                <div className={styles.aboutBackground}>

                    <p className={styles.aboutDescription}></p>
                        
                    
                </div>
                
                
                <div className={styles.aboutPictureBackground}></div>
                

            </div>
            </div>
            )    
}

            export default Projects