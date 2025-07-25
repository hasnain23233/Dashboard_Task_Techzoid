import React from 'react';
import CreateContextAPI from './createContextAPI';

const ApiContextProvider = ({ children }) => {
    const value = true;

    return (
        <CreateContextAPI.Provider value={value}>
            {children}
        </CreateContextAPI.Provider>
    );
};

export default ApiContextProvider;
