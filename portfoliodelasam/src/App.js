import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingMain from './Components/LoadingMain';

function App() {
  return (
    <div>

      <Routes>
        <Route exact path='/' element={
          <>
            <LoadingMain/>
          </>
          } 
        />
        
      </Routes>
    </div>
  )
}

export default App;
