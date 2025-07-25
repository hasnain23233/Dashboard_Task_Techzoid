import React, { useContext } from 'react';
import './App.css';
import ApiContextProvider from './context/ApiContextProvider';
import AppContent from './AppContent';

function App() {
  return (
    <ApiContextProvider>
      <AppContent />
    </ApiContextProvider>
  );
}

export default App;
