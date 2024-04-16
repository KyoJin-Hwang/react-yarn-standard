import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from '@pages/Home'
import TestMain from '@pages/TestMain'
import TestSub from '@pages/TestSub'
import logo from './logo.svg'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <header className="App-header" css={{ background: 'black' }}>
        <img src={logo} className="App-logo" alt="logo" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<TestMain />} />
          <Route path="/sub" element={<TestSub />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
