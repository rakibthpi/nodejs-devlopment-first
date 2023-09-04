/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { UserContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(UserContext);
    if (loding) {
        return <div>loding ......</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;