import React, { useContext, useState } from 'react'
import './App.css'
import FullMainDashboard from './FullMainDashboard'
import {
  BrowserRouter as Router
} from "react-router-dom";
import Login from './compnents/Login';
import ApiContextProvider from './context/ApiContextProvider';
import CreateContextAPI from './context/createContextAPI';


function App() {
  const Value = useContext(CreateContextAPI)

  return (
    <>
      <ApiContextProvider>
        {Value ? <Login /> :

          <Router>
            <FullMainDashboard />

          </Router>
        }
      </ApiContextProvider>
    </>
  )
}

export default App
