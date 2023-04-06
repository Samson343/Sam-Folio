import React, {useEffect, useState} from "react";
import styles from './LoadingMain.module.css'
import { Navigate } from "react-router";


function LoadingMain ({ routeTo, setRouteTo }) {
   const [rollOut, setRollOut] = useState(false)
   const [reDirect, setReDirect] = useState(false)

   useEffect (() => {
      setTimeout(() => {
         setRollOut(true)
      }, 1500)
      setTimeout (() => {
         setReDirect(true)
      }, 4000)
   }, [])

   return (
    <div className={ styles.mainDiv }>
      <hr className={`${styles.topBar} ${styles.fadeOutDelayed}`}></hr>

        <span className={ rollOut ? `${styles.loadingBarLeft} ${styles.roll} ${styles.leftBarAfter}` : `${styles.loadingBarLeft} ${styles.flip}` }> </span>

       <img className={ rollOut ? `${styles.image} ${styles.imageAfter} ${styles.roll}` : `${styles.image} ${styles.flip}` } 
       src = 'Beardboy2.png' 
       alt = 'me!'
       >

       </img>
       <span className={ rollOut ? `${styles.loadingBarRight} ${styles.roll} ${styles.rightBarAfter}` : `${styles.loadingBarRight} ${styles.flip}` }> </span>
       
       <hr className={`${styles.botBar} ${styles.fadeOut}`}></hr>
       {
         reDirect && routeTo &&
         <>
         <Navigate to = {routeTo}></Navigate>
         </>
         
       }
    </div>
   )
}

export default LoadingMain