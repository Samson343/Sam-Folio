import React, { useState, useEffect, useRef } from "react";
import styles from './Contact.module.css'
import { Controller, Scene } from 'react-scrollmagic-r18';
import { BsFillChatRightQuoteFill } from 'react-icons/bs'




function Contact() {



    return (
        <div className={styles.contactRoot}>
            <div className={styles.fireWrapper}>
                <div className={styles.backgroundOpacifier}>
                    <Controller>
                        <Scene duration={990} triggerHook={0.3} pin>
                            <div className={styles.centerWrapper}>
                                <BsFillChatRightQuoteFill size={"8vmin"} className={styles.quoteIcon} />

                                <div className={styles.centerBox}>
                                    <p>Sam was an exceptional student during his time at Fullstack Academy, consistently demonstrating a high level of intelligence and work ethic.</p>
                                </div>

                            </div>
                        </Scene>
                    </Controller>
                    <div className={styles.pictureWrapper}>
                        <img src="headshotAdam.png" className={styles.headshot} alt="Adam Marley"></img>
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

export default Contact