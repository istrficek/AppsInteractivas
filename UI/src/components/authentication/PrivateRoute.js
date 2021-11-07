import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { DataContext } from '../../context'

const PrivateRoute = ({ children }) => {  
    const { currentUser } = useContext(DataContext);

    return currentUser.user !== undefined ? children : <Navigate to="/login" />;
}

export default PrivateRoute