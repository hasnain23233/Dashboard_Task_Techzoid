import React, { useContext } from 'react'
import FullMainDashboard from './FullMainDashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './compnents/Login';
import CreateContextAPI from './context/createContextAPI';

const AppContent = () => {
    const { logIn } = useContext(CreateContextAPI);

    return (
        <>
            <Router>
                {logIn ? <Login /> : <FullMainDashboard />}
            </Router>
        </>
    );
}

export default AppContent
