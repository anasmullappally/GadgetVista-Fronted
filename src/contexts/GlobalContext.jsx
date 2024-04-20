/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const GlobalContext = ({ children }) => {
    const [openSideBar, setOpenSideBar] = useState(false);


    return (
        <AppContext.Provider value={{
            openSideBar, setOpenSideBar
        }}
        >
            {children}
        </AppContext.Provider>
    );
};