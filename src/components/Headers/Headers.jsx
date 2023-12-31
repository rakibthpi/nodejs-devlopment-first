// import React from 'react';

import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/Logo.svg";
import './Header.css';
import { useContext } from "react";
import { UserContext } from "../../providers/AuthProvider";

const Headers = () => {
    const navigate = useNavigate();
    const { logOut, user } = useContext(UserContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="mainHeader">
            <div className="container">
                <div className="textHeader">
                    <div className="Logo_area">
                        <Link to="/"><img src={logo} alt="photos" /></Link>
                    </div>
                    <div className="menu_area">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/order">Order</Link></li>
                            <li>
                                {
                                    user ? <Link onClick={() => { handleLogOut() }}>logOut </Link> : <Link to='/login'>login </Link>
                                }
                            </li>
                            <li><Link to="/ragister">Ragister</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headers;