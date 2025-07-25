import React, { useState } from 'react';
import CreateContextAPI from './createContextAPI';

const ApiContextProvider = ({ children }) => {
    const [logIn, setLoggin] = useState(true)

    return (
        <CreateContextAPI.Provider value={{ logIn, setLoggin }}>
            {children}
        </CreateContextAPI.Provider>
    );
};

export default ApiContextProvider;
