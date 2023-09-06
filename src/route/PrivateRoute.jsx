/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { UserContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loding } = useContext(UserContext);
    if (loding) {
        return <div>loding ......</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoute;