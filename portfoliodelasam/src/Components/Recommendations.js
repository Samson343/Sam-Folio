import React, { useState, useEffect, useRef } from "react";
import styles from './Recommendations.module.css'
import { Controller, Scene } from 'react-scrollmagic-r18';
import { BsFillChatRightQuoteFill } from 'react-icons/bs'




function Recommendations ({ scrollPosition, setScrollPosition }) {
 console.log (scrollPosition)


    return (
        <div className={styles.contactRoot}>
            

            <div className={styles.fireWrapper}>
            <div className={styles.aboutHeaderWrapper}>
                <h3 className={styles.aboutHeader}>
                    <span className={styles.numbers}>.03</span >
                    Recos
                </h3>
                <span className={styles.aboutHeaderLine}></span>
            </div>
            <hr className={styles.aboutHr}></hr>
                <div className={styles.backgroundOpacifier}>
                

                    <Controller>
                        <Scene duration={990} triggerHook={0.3} pin>
                            <div className={styles.centerWrapper}>
                                <BsFillChatRightQuoteFill size={"8vmin"} className={styles.quoteIcon} />

                                <div className={styles.centerBox}>
                                    <p className={styles.reko}>Sam was an exceptional student during his time at Fullstack Academy, consistently demonstrating a high level of intelligence and work ethic.</p>
                                </div>

                            </div>
                        </Scene>
                    </Controller>
                    <div className={styles.pictureWrapper}>
                        <img src="headshotAdam.png" className={scrollPosition > 5300 ? styles.headshot : styles.headshotBefore} alt="Adam Marley"></img>
                        <div className={scrollPosition > 4900 ? styles.titleWrapper : styles.disabled}>
                            <h5 className={styles.name}>Adam Marley</h5>
                            <h6 className={styles.jobTitle}>Associate Instuctor/Mentor</h6>
                            <p className={styles.company}>Fullstack Academy</p>
                        </div>
                    </div>
                    {/* <Controller>
                        <Scene duration={150} triggerHook={0.5} pin>
                            <div className={styles.pictureWrapper}>
                                <img src="headshotAdam.png" className={styles.headshot} alt="Adam Marley"></img>
                            </div>
                        </Scene>
                    </Controller> */}
                </div>
                <div className={styles.backgroundOpacifier}>
                    <Controller>
                        <Scene duration={850} triggerHook={0.3} pin>
                            <div className={styles.centerWrapper}>
                                <BsFillChatRightQuoteFill size={"8vmin"} className={styles.quoteIcon} />

                                <div className={styles.centerBox}>
                                    <p>I'm an inovator that would love to keep your company modern and relavent. If you like what you see, let's connect.</p>
                                </div>
                            </div>
                        </Scene>
                    </Controller>
                </div>
                <div className={styles.backgroundOpacifier}>
                    <Controller>
                        <Scene duration={850} triggerHook={0.3} pin>
                            <div className={styles.centerWrapper}>
                                <BsFillChatRightQuoteFill size={"8vmin"} className={styles.quoteIcon} />

                                <div className={styles.centerBox}>
                                    <p>I'm an inovator that would love to keep your company modern and relavent. If you like what you see, let's connect.</p>
                                </div>
                            </div>
                        </Scene>
                    </Controller>
                </div>
            </div>
        </div>
    )
}

export default Recommendations