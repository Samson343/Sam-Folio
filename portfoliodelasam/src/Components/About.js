import React, { useState, useEffect, useRef } from "react";
import styles from './About.module.css'
import { FaGamepad, FaGuitar, FaHiking, FaRunning } from 'react-icons/fa'
import { GiGuitarBassHead, GiRunningShoe } from 'react-icons/gi'

function About({ setRouteTo, scrollPosition }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.6, // Trigger when half of the element is visible
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
    <div className={styles.aboutRoot} ref={ref} >
      {isVisible &&
        <div className={styles.fadeIn}>
          <>
            <div className={styles.background}></div>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.aboutHeaderWrapper}>
              <h3 className={styles.aboutHeader}>
                <span className={styles.numbers}>.01</span >
                About me
              </h3>
              <span className={styles.aboutHeaderLine}></span>
            </div>

            <hr className={styles.aboutHr}></hr>

            <div className={styles.relative}>
              <div className={styles.title}>I came here to build.</div>
              <div className={styles.aboutBackground}>
                <div className={styles.interestsWrapper}>
                  <div className={styles.interests}>
                    <span>Things I enjoy: </span>
                    <GiGuitarBassHead className={styles.interestIcons} />
                    <GiRunningShoe className={styles.interestIcons} />
                    <FaGamepad className={styles.interestIcons} />
                    <FaHiking className={styles.interestIcons} />
                  </div>

                  <p className={styles.aboutDescription}>
                    I'm a fullstack web developer with a particular love for frontend engineering. I become obsessed with difficult problems, stay up late to get a handle on the bleeding edge of tech, and pour my heart into everything I create. </p>
                </div>
                <div className={styles.listWrapper}>
                  <ul className={styles.techList}> Frontend
                    <li className={styles.li}>React</li>
                    <li className={styles.li}>CSS</li>
                    <li className={styles.li}>HTML5</li>
                  </ul>
                  <ul className={styles.techList}> Backend
                    <li className={styles.li}>SQL</li>
                    <li className={styles.li}>Express</li>
                    <li className={styles.li}>Node</li>
                  </ul>
                </div>
              </div>
              <img className={styles.aboutPicture} src="SamHeadshot.jpg" alt="headshot"></img>
              <div className={styles.aboutPictureBackground}></div>
            </div>
          </>

          {scrollPosition >= 700 &&
            <img className={styles.flowerImage2} src="flowerVine2.png" alt="white flowers"></img>
          }
        </div>
      }
    </div>


  )
}

export default About