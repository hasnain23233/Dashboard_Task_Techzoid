import React, { useState } from 'react'
import './App.css'
import FullMainDashboard from './FullMainDashboard'
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <FullMainDashboard />
      </Router>
    </>
  )
}

export default App
