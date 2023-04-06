import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingMain from './Components/LoadingMain';
import About from './Components/About'
import Home from './Components/Home';

function App() {
  const [ routeTo, setRouteTo ] = useState('')

  return (
    <div>

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
        <Route exact path='/' element={
          <>
            <About
              setRouteTo={ setRouteTo }
            />
          </>
          } 
        />
        <Route path='/home' element={
          <>
            <Home
              setRouteTo={ setRouteTo }
            />
          </>
          } 
        />
      </Routes>
    </div>
  )
}

export default App;
