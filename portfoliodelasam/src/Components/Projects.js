import { useEffect, useState, useRef } from 'react';
import React from "react";
import styles from './Projects.module.css'
import { DiPostgresql, DiReact, DiNodejsSmall, DiBootstrap, DiJavascript1, DiCss3, DiHtml5, DiAngularSimple } from 'react-icons/di'
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb"
import { SiExpress, SiStrapi } from "react-icons/si";

function Projects() {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    console.log(isVisible)
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.12, // Trigger when half of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={styles.projectsRoot}>
            {isVisible &&
                <>
                    <div className={styles.background}></div>
                    <div className={styles.backgroundOverlay}></div>
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
                                <div className={styles.title}>Shakey Graves - Movie of the Week</div>

                                <span className={styles.projectDescription}> Super proud to have contributed to this awesome project at House of Giants for the release of Shakey Graves's new album. He wanted to create something incredibly unique that would allow you to walk away with a one-of-a-kind album that is truly your own.

                                    So with the help of AI and some clever engineering, we helped bring this idea to life - based on a short prompt from the user, the site creates a unique "movie" in that theme.

                                    This means a custom synopsis, title, artwork, and - the most important part - a "soundtrack" which is compiled from a large number of completely unique, alternate versions of songs from the new album.

                                </span>

                                <div className={styles.techIcons}>
                                    <TbBrandNextjs className={styles.techIcon} />
                                    <TbBrandThreejs className={styles.techIcon} />
                                    <SiStrapi className={`${styles.techIcon} ${styles.small}`} />
                                    <DiCss3 className={styles.techIcon} />
                                    <DiHtml5 className={styles.techIcon} />


                                </div>

                                <div className={styles.pictureBackground}>
                                    {/* <a className={styles.Link} href="https://super-semolina-b1e7cc.netlify.app/" target="_blank" rel="noreferrer">
                                        <img className={styles.screenshot} src="strangersThingsScreenshot4.PNG" alt='Connected'></img>
                                    </a> */}
                                    <video src="shakey.mp4" type="video/mp4" controls autoPlay loop muted playsInline>

                                    </video>
                                </div>

                            </div>
                        </div>

                        <div className={styles.project1Wrapper}>
                            <div className={styles.projectBackground2}>
                                <div className={styles.titleRight}>Centers for Disease Control</div>
                                <span className={styles.projectDescription2}>A one-off UI/UX redesign of an existing document search tool at the CDC. The original was well set up in many ways, but it didn't scale well with the ever-growing data set assigned to it, so I was tasked with designing and implementing an entirely new UI for a much better user experience that also ensured scalability. It was also in desperate need of a responsiveness overhaul for lab operatives that needed to access the information on small or midsize devices. Analitics were also added to track which files were downloaded most frequently so that the UI and database could be organized accordingly.
                                </span>

                                <div className={styles.techIcons2}>
                                    <DiJavascript1 className={styles.techIcon} />
                                    <DiAngularSimple className={styles.techIcon} />
                                    <DiCss3 className={styles.techIcon} />
                                    <DiHtml5 className={styles.techIcon} />
                                </div>

                                <div className={styles.pictureBackground2}>
                                    <video src="CDC-Redesign.mp4" type="video/mp4" controls autoPlay loop muted playsInline></video>
                                </div>

                            </div>
                        </div>

                        <div className={styles.project1Wrapper}>

                            <div className={styles.projectBackground}>
                                <div className={styles.title}>Hike + Seek Outfitters</div>
                                <span className={styles.projectDescription}>Our team of 4 built this modern e-commerce application, drawing inspiration from industry leaders like REI and Northface

                                    Features a dynamic cart and account system which allows users to pick up where they left off on different devices, experience a simulated checkout, and track their order history. An admin interface was created for inventory management- such as adding or removing products- in addition to warehouse stock tracking which is stored and persisted for every available product ensuring that orders cannot be created unless they can be fulfilled.</span>

                                <div className={styles.techIcons}>
                                    <DiReact className={styles.techIcon} />
                                    <SiExpress className={styles.techIcon} />
                                    <DiNodejsSmall className={styles.techIcon} />
                                    <DiPostgresql className={styles.techIcon} />
                                    <DiBootstrap className={styles.techIcon} />
                                    <DiCss3 className={styles.techIcon} />
                                    <DiHtml5 className={styles.techIcon} />

                                </div>

                                <div className={styles.pictureBackground}>
                                    {/* <a className={styles.Link} href="https://super-semolina-b1e7cc.netlify.app/" target="_blank" rel="noreferrer">
                                        <img className={styles.screenshot} src="strangersThingsScreenshot4.PNG" alt='Connected'></img>
                                    </a> */}
                                    <video src="HikeSeek.mp4" type="video/mp4" controls autoPlay loop muted playsInline>

                                    </video>
                                </div>

                            </div>
                        </div>


                    </div>
                </>
            }
        </div>
    )
}

export default Projects