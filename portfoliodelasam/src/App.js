import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingMain from './Components/LoadingMain';
import About from './Components/About'
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import styles from './App.css'

function App() {
  const [ routeTo, setRouteTo ] = useState('')
  const [rotateBox, setRotateBox] = useState(false)

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
        <Route path='/home' element={
          <>
           <NavBar
             rotateBox= { rotateBox }
             setRotateBox= { setRotateBox }
           />
            <Home
              setRouteTo={ setRouteTo }
              rotateBox={ rotateBox }
              setRotateBox={ setRotateBox }
            />
          </>
          } 
        />
      </Routes>
    </div>
  )
}

export default App;
