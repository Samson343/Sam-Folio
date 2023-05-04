import React, { useState, useEffect, useRef } from "react";
import styles from './Recommendations.module.css'
import { Controller, Scene } from 'react-scrollmagic-r18';
import { BsFillChatRightQuoteFill, BsFillChatLeftQuoteFill, BsChatLeftQuote } from 'react-icons/bs'




function Recommendations({ scrollPosition, setScrollPosition }) {
    const [isVisible, setIsVisible] = useState(false);
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
                threshold: 0.08, // Trigger when half of the element is visible
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
        <div className={styles.contactRoot} ref={ref}>
           

            <div className={styles.fireWrapper}>
               
                
                
                    {isVisible &&
                        <>
                            <div className={styles.aboutHeaderWrapper}>
                                <h3 className={styles.aboutHeader}>
                                    <span className={styles.numbers}>.03</span >
                                    Recos
                                </h3>
                                <span className={styles.aboutHeaderLine}></span>
                            </div>

                            <hr className={styles.aboutHr}></hr>
                        </>
                    }
                    <div className={styles.backgroundOpacifier}>
                    <img className={styles.mobile} src={"campfire3.png"} alt=""></img>  
                        {isVisible &&
                            <Controller>
                                <Scene duration={'173%'} triggerHook={0.3} pin className={styles.scrollContainer}>

                                    <div className={styles.centerWrapper1}>
                                        <BsFillChatRightQuoteFill size={"7.2vmin"} className={styles.quoteIcon} />

                                        <div className={styles.centerBox}>
                                            <p className={styles.reko1}>Sam was an exceptional student during his time at Fullstack Academy, consistently demonstrating a high level of intelligence and work ethic.</p>
                                        </div>

                                    </div>

                                </Scene>
                            </Controller>
                        }

                        <div className={styles.pictureWrapper}>
                            <img src="headshotAdam.png" className={scrollPosition > 5800 ? styles.headshot : styles.headshotBefore} alt="Adam Marey"></img>
                            <div className={scrollPosition > 5800 ? styles.titleWrapper : styles.disabled}>
                                <h5 className={styles.name}>Adam Marey</h5>
                                <h6 className={styles.jobTitle}>Associate Instuctor/Mentor</h6>
                                <p className={styles.company}>Fullstack Academy</p>
                            </div>
                        </div>





                        {/* next step is to get this to be a divider between each reco */}
                        {/* <hr className={styles.recoDivider}></hr> */}

                        {/* <Controller>
                        <Scene duration={150} triggerHook={0.5} pin>
                            <div className={styles.pictureWrapper}>
                                <img src="headshotAdam.png" className={styles.headshot} alt="Adam Marley"></img>
                            </div>
                        </Scene>
                    </Controller> */}
                    </div>
                    <div className={styles.backgroundOpacifier}>
                        <div className={styles.pictureWrapperMid}>
                            <div className={scrollPosition > 7700 ? styles.titleWrapperMid : styles.disabled}>
                                <h5 className={styles.name}>Fabian Hernandez</h5>
                                <h6 className={styles.jobTitle}>FullStack Developer</h6>
                                {/* <p className={styles.company}>Fullstack Academy</p> */}
                            </div>
                            <img src="Fabian-headshot.jpg" className={scrollPosition > 8000 ? styles.headshot : styles.headshotBefore} alt="Fabian"></img>
                        </div>
                        <Controller>
                            <Scene duration={'173%'} triggerHook={0.3} pin>
                                <div className={styles.centerWrapperMid}>
                                    <BsChatLeftQuote size={"7.2vmin"} className={styles.quoteIconMid} />

                                    <div className={styles.centerBoxMid}>
                                        <p className={styles.rekoMid} >Sam always stood out as a talented developer, constantly going above and beyond what we covered in our course by exploring and implementing new technologies and techniques whenever possible.</p>
                                    </div>
                                </div>
                            </Scene>
                        </Controller>

                    </div>

                    <div className={styles.backgroundOpacifier}>
                        <Controller>
                            <Scene duration={'173%'} triggerHook={0.3} pin>
                                <div className={styles.centerWrapper}>
                                    <BsFillChatRightQuoteFill size={"7.2vmin"} className={styles.quoteIcon} />

                                    <div className={styles.centerBox}>
                                        <p className={`${styles.reko} ${styles.animateFlicker}`}>I'm an inovator that would love to keep your company modern and relavent. If you like what you see, let's connect.</p>
                                    </div>
                                </div>
                            </Scene>
                        </Controller>
                        <div className={styles.pictureWrapper}>
                            <img src="SamHeadshot.jpg" className={scrollPosition > 10000 ? styles.headshot : styles.headshotBefore} alt="Sam"></img>
                            <div className={scrollPosition > 10000 ? styles.titleWrapper : styles.disabled}>
                                <h5 className={styles.name}>Sam Banister</h5>
                                <h6 className={styles.jobTitle}>Fullstack Engineer</h6>
                                <p className={styles.company}>@ your company</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Recommendations