import React from "react";
import styles from './Projects.module.css'
import { DiPostgresql, DiReact, DiNodejsSmall, DiNodejs, DiBootstrap, DiJavascript1, DiAndroid, DiCss3, DiHtml5, DiJavascript,   } from 'react-icons/di'
import { SiExpress } from "react-icons/si";

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

                            <div className={styles.techIcons}>
                               <DiReact className={styles.techIcon}/>
                               
                               <SiExpress className={styles.techIcon}/>
                               <DiNodejsSmall className={styles.techIcon}/>
                               <DiPostgresql className={styles.techIcon}/>
                               <DiBootstrap className={styles.techIcon}/>
                               <DiCss3 className={styles.techIcon}/>
                               <DiHtml5 className={styles.techIcon}/>
                               
                            </div>

                        <div className={styles.pictureBackground}></div>

                    </div>
                </div>

                <div className={styles.project1Wrapper}>
                    <div className={styles.projectBackground}>
                        <div className={styles.titleRight}>Connected - Browser Game</div>
                        <span className={styles.projectDescription2}>An enjoyable browser game built from the ground up. Features a fully functional, home-grown, AI opponent that capitalizes on winning setups and blocks your attempts to win. The goal was to demo my Javascript skills through a simple game with a relatively complex logical framework as it relates to the DOM. Please feel free and hop on and play a game against that insidious AI!</span>

                        <div className={styles.techIcons2}>
                               <DiJavascript1 className={styles.techIcon}/>
                               <DiCss3 className={styles.techIcon}/>
                               <DiHtml5 className={styles.techIcon}/>

                            </div>

                        <div className={styles.pictureBackground2}></div>

                    </div>
                </div>

                <div className={styles.project1Wrapper}>
                    <div className={styles.projectBackground}>
                        <div className={styles.title}>Stranger's Things Inc.</div>

                        <span className={styles.projectDescription}> A web-app that aims to mirror the intricacies and subtle complexities of Craigslist, built from the ground up. Users can
                            post items for sale, edit existing posts, message sellers to inquire about their items, and so much more!
                            ● In-depth REST API integration that handles user authentication, creating and editing posts, and sending
                            messages to other users on the platform.
                            ● Designed and implemented a user-friendly UI with all CSS written from scratch </span>

                            <div className={styles.techIcons}>
                               <DiReact className={styles.techIcon}/>
                               <SiExpress className={styles.techIcon}/>
                               <DiNodejsSmall className={styles.techIcon}/>
                               <DiPostgresql className={styles.techIcon}/>
                               <DiCss3 className={styles.techIcon}/>
                               <DiHtml5 className={styles.techIcon}/>

                            </div>

                        <div className={styles.pictureBackground}></div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects