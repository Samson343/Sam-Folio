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

  return (
    <div className={styles.appRoot}>
      <Routes>
        <Route exact path='/' element={
          <>
           <NavBar/>
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
