import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext({});

export function DataProvider(props) {
    const [currentUser, setCurrentUser] = useState({});
    const [ token, setToken ] = useState('');
    const [currentChildId, setCurrentChildId] = useState('');

    return (
        <DataContext.Provider
        value={{
            currentUser,
            setCurrentUser,
            token,
            setToken,
            currentChildId,
            setCurrentChildId
        }}>
      {props.children}
    </DataContext.Provider>
    );
}