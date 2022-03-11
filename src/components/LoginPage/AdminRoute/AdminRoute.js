import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, admin, isLoading} = useAuth();
    let location = useLocation();

    if(isLoading){
        return <Spinner border="animation"/>
    }
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/" state={{ from: location }}/>
    
};

export default AdminRoute;