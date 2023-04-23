import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingMain from './Components/LoadingMain';
import About from './Components/About'
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import styles from './App.css'
import Contact from './Components/Recommendations';
import Recommendations from './Components/Recommendations';

function App() {
  const [ routeTo, setRouteTo ] = useState('')
  const [rotateBox, setRotateBox] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

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
             rotateBox= { rotateBox }
             setRotateBox= { setRotateBox }
           />
            <Home
              setRouteTo={ setRouteTo }
              rotateBox={ rotateBox }
              setRotateBox={ setRotateBox }
              scrollPosition={scrollPosition}
              setScrollPosition={setScrollPosition}
            />
            <Recommendations 
              scrollPosition={scrollPosition}
              setScrollPosition={setScrollPosition}
            />
          </>
          } 
        />
      </Routes>
    </div>
  )
}

export default App;
