import styles from './Contact.module.css'
import { FaSpaceShuttle } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
import { HiDocumentDuplicate } from 'react-icons/hi'


function Contact() {
    return (
        <div className={styles.contactRoot}>
            <div className={styles.aboutHeaderWrapper}>
                <h3 className={styles.aboutHeader}>
                    <span className={styles.numbers}>.04</span >
                    Let's connect
                </h3>
                <span className={styles.aboutHeaderLine}></span>
            </div>

            <hr className={styles.aboutHr}></hr>





            <div className={styles.centerBox}>
                <p className={`${styles.title} ${styles.animTypewriter}`}>Like what you see? Let's talk.</p>

                <div className={styles.aBoxForBoxes}>
                    <p className={styles.box}>
                        <a rel="noreferrer" href={"https:www.github.com/Samson343"} target="_blank" className={styles.slideInBottom}>
                            <FiGithub className={`${styles.socialIcons}`}

                                size={'2.2vh'}
                            />
                        </a>
                    </p>
                    <p className={styles.box}></p>
                    <p className={styles.box}>
                        <a rel="noreferrer" href={"https://www.codewars.com/users/Samson12345"} target="_blank" className={styles.slideInBottom}>
                            <SiCodewars className={`${styles.socialIcons}`}
                                size={'1.9vh'}
                            />
                        </a>
                    </p>
                    <p className={styles.box}>
                        <a rel="noreferrer" href={"https://www.linkedin.com/in/sam-banister/"} target="_blank" className={styles.slideInBottom}>
                            <AiFillLinkedin className={`${styles.socialIcons}`}
                                size={'2.2vh'}
                            />
                        </a>
                    </p>
                    <p className={styles.box}></p>
                    <p className={styles.box}>
                        <a href="../../Sam-Banister-FullStack-Resume.pdf" target="_blank">
                            <HiDocumentDuplicate className={`${styles.socialIcons}`}
                              size={'2.2vh'}
                            />
                        </a>
                    </p>
                </div>
            </div>

            <div className={styles.snowflake}>
                .
            </div>
            <div className={styles.snowflake}>
                .
            </div>
            <div className={styles.snowflake}>
                .
            </div>
            <div className={styles.snowflake}>
                .
            </div>
            {/* <div className={styles.snowflake}>
            <FaSpaceShuttle color='grey'/>
            </div> */}
            <div className={styles.snowflake}>
                .
            </div>
            <div className={styles.snowflake}>
                .
            </div>
            <div className={styles.snowflake}>
                .
            </div>
            {/* <div className={styles.snowflake}>
                <FaSpaceShuttle color='grey'/>
            </div> */}
            <div className={styles.snowflake}>
                .
            </div>
            <div className={styles.snowflake}>
                .
            </div>
            <div className={styles.snowflake}>
                .
            </div>

            <div className={styles.snowflake}>
                .
            </div>

            {/* <img className={styles.spaceship} src="spaceship.png" alt="spaceship"></img> */}
        </div>
    )
}

export default Contact