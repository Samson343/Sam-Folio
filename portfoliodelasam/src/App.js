import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingMain from './Components/LoadingMain';
import About from './Components/About'
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import styles from './App.css'
import Contact from './Components/Contact';
import Recommendations from './Components/Recommendations';
import Projects from './Components/Projects';
// import ScrollToElement from './ScrollToElement';

function App() {
  const [ routeTo, setRouteTo ] = useState('')
  
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [rotateBox, setRotateBox] = useState(false)



  // useEffect(() => {
  //   function handleResize() {
  //     setViewportWidth(window.innerWidth);
  //     console.log("this is viewportWidth", viewportWidth)
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

 
  




  


  return (
    <div className={styles.appRoot}>
      <Routes>
        <Route path='/loading' element={
          <>
            <LoadingMain
              routeTo = { routeTo }
              setRouteTo = { setRouteTo }
            />
          </>
          } 
        />
        <Route exact path='/about' element={
          <>
            <About
              setRouteTo={ setRouteTo }
              
            />
          </>
          } 
        />
        <Route exact path='/' element={
          <>
           <NavBar
           
            
           />
            <Home
              setRouteTo={ setRouteTo }
              rotateBox={ rotateBox }
              setRotateBox={ setRotateBox }
              scrollPosition={scrollPosition}
              setScrollPosition={setScrollPosition}
             
            />
            <Projects/>
            <Recommendations 
              scrollPosition={scrollPosition}
              setScrollPosition={setScrollPosition}
            />
            <Contact/>
          </>
          } 
        />
      </Routes>
    </div>
  )
}

export default App;
