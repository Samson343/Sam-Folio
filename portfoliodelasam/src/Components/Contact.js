import styles from './Contact.module.css'
import { FaSpaceShuttle } from 'react-icons/fa'


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