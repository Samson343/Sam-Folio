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
                        <span className={styles.projectDescription}>Our team of 4 built this modern e-commerce application, drawing inspiration from industry leaders like REI and Northface

                            Features a dynamic cart and account system which allows users to pick up where they left off on different devices, experience a simulated checkout, and track their order history. An admin interface was created for inventory management- such as adding or removing products- in addition to warehouse stock tracking which is stored and persisted for every available product ensuring that orders cannot be created unless they can be fulfilled.</span>

                        <div className={styles.pictureBackground}></div>

                    </div>
                </div>

                <div className={styles.project1Wrapper}>
                    <div className={styles.projectBackground}>
                        <div className={styles.titleRight}>Connected - Browser Game</div>
                        <span className={styles.projectDescription2}>An enjoyable browser game built from the ground up. Features a fully functional, home-grown, AI opponent that capitalizes on winning setups and blocks your attempts to win. The goal was to demo my Javascript skills through a simple game with a relatively complex logical framework as it relates to the DOM. Please feel free and hop on and play a game against that insidious AI!</span>

                        <div className={styles.pictureBackground2}></div>

                    </div>
                </div>

                <div className={styles.project1Wrapper}>
                    <div className={styles.projectBackground}>
                        <div className={styles.title}>Stranger's Things Inc.</div>

                        <span className={styles.projectDescription}></span>

                        <div className={styles.pictureBackground}></div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects