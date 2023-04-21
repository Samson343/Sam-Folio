import React, { useState, useEffect } from "react";
import styles from './Contact.module.css'
import { GiCampfire, GiFireAce, GiFireAxe, GiFireBomb, GiFireGem, GiFireWave, GiSmallFire } from 'react-icons/gi'
import { TbCampfire } from 'react-icons/tb'
// import { Link } from "react-router-dom";
import {IoIosBonfire, IoMdBonfire} from 'react-icons/io'
import {SiFireship} from 'react-icons/si'
import {ImFire} from 'react-icons/im'



function Contact () {
    return (
        <div className={styles.contactRoot}>

          <div className={styles.fireWrapper}>
            <div className={styles.backgroundOpacifier}>
            {/* <TbCampfire size={'10vh'} className={styles.campfireIcon}/>
            <GiCampfire size={'10vh'} className={styles.campfireIcon}/>
          
           <GiFireGem size={'10vh'} className={styles.campfireIcon}/>
           <GiFireWave size={'10vh'} className={styles.campfireIcon}/>
           <GiSmallFire size={'10vh'} className={styles.campfireIcon}/> */}
           {/* <IoMdBonfire size={'10vh'} className={styles.campfireIcon}/> */}
           </div>
          </div>
          {/* <IoIosBonfire size={'10vh'} className={styles.campfireIcon}/> */}
          
          {/* <img className={styles.campfireIconLeft} src='fireGem.png' alt = 'fire gem'></img> */}
        </div>
    )
}

export default Contact