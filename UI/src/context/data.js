import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext({});

export function DataProvider(props) {
    const [currentUser, setCurrentUser] = useState({});
    const [ token, setToken ] = useState('');
    const [url, setUrl] = useState("http://127.0.0.1:3000");
    const [currentChildId, setCurrentChildId] = useState('');

    return (
        <DataContext.Provider
        value={{
            currentUser,
            setCurrentUser,
            token,
            setToken,
            url,
            currentChildId,
            setCurrentChildId
        }}>
      {props.children}
    </DataContext.Provider>
    );
}