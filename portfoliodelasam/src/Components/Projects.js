import React from "react";
import styles from './Projects.module.css'

function Projects() {
    return (
        <div className={styles.projectsRoot}>
            <div className={styles.projectHeaderWrapper}>
                <h3 className={styles.projectHeader}>
                    <span className={styles.numbers}>.02</span >
                    Projects
                </h3>
                <span className={styles.projectHeaderLine}></span>

            </div>
            <hr className={styles.projectHr}></hr>
            <div className={styles.projectWrapper}>


                <div className={styles.project1Wrapper}>
                    
                    <div className={styles.projectBackground}>
                       <div className={styles.title}>Hike + Seek Outfitters</div>
                        <p className={styles.projectDescription}></p>

                        <div className={styles.pictureBackground}></div>

                    </div>
                </div>
                
                <div className={styles.project1Wrapper}>
                    <div className={styles.projectBackground}>
                    <div className={styles.titleRight}>Connected - Browser Game</div>
                        <p className={styles.projectDescription}></p>

                        <div className={styles.pictureBackground}></div>

                    </div>
                </div>

                <div className={styles.project1Wrapper}>
                    <div className={styles.projectBackground}>
                    <div className={styles.title}>Stranger's Things Inc.</div>

                        <p className={styles.projectDescription}></p>

                        <div className={styles.pictureBackground}></div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects