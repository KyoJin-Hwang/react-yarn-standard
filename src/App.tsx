import React from 'react'
import { css } from '@emotion/react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header" css={{ background: 'black' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/KyoJin-Hwang/react-yarn-standard"
          target="_blank"
          rel="noreferrer"
        >
          Kyojin
        </a>
      </header>
    </div>
  )
}

export default App
