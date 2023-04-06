import React, {useEffect, useState} from "react";
import styles from './LoadingMain.module.css'


function LoadingMain () {
   const [rollOut, setRollOut] = useState(false)

   useEffect (() => {
      setTimeout(() => {
         setRollOut(true)
      }, 1500) 
   }, [])

   return (
    <div className={ styles.mainDiv }>
      <hr className={`${styles.topBar} ${styles.fadeOut}`}></hr>
      
        <span className={ rollOut ? `${styles.loadingBarLeft} ${styles.roll} ${styles.leftBarAfter}` : `${styles.loadingBarLeft} ${styles.flip}` }> </span>

       <img className={ rollOut ? `${styles.image} ${styles.imageAfter} ${styles.roll}` : `${styles.image} ${styles.flip}` } 
       src = 'Beardboy2.png' 
       alt = 'me!'
       >

       </img>
       <span className={ rollOut ? `${styles.loadingBarRight} ${styles.roll} ${styles.rightBarAfter}` : `${styles.loadingBarRight} ${styles.flip}` }> </span>
       
       <hr className={`${styles.botBar} ${styles.fadeOut}`}></hr>
       
    </div>
   )
}

export default LoadingMain