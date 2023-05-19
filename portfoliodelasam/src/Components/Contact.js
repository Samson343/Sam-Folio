import styles from './Contact.module.css'
import { FiGithub, FiMail } from 'react-icons/fi'
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

          <a rel="noreferrer" href={"https://www.github.com/Samson343"} target="_blank" className={styles.box}>
            <FiGithub className={`${styles.socialIcons}`}

              size={'2.2vh'}
            />
          </a>

          <a rel="noreferrer" href={"https://www.linkedin.com/in/sam-banister/"} target="_blank" className={styles.box}>
            <AiFillLinkedin className={`${styles.socialIcons}`}
              size={'2.2vh'}
            />
          </a>

          <a rel="noreferrer" href="mailto:sam.ban@gmail.com" target="_blank" className={styles.box}>
            <FiMail className={`${styles.socialIcons}`}
              size={'2.2vh'}
            />
          </a>

          <a rel="noreferrer" href={"https://www.codewars.com/users/Samson12345"} target="_blank" className={styles.box}>
            <SiCodewars className={`${styles.socialIcons}`}
              size={'1.9vh'}
            />
          </a>

          <a href="../../Sam-Banister-FullStack-Resume.pdf" target="_blank" className={styles.box}>
            <HiDocumentDuplicate className={`${styles.socialIcons}`}
              size={'2.5vh'}
            />
          </a>

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
      <div className={styles.snowflake}>
        .
      </div>
      <div className={styles.snowflake}>
        .
      </div>
      <div className={styles.snowflake}>
        .
      </div>
      <div>
        <p className={styles.footer}>Designed and built by Sam Banister</p>
      </div>
    </div>
  )
}

export default Contact