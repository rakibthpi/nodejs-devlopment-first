// import React from 'react';

import { Link } from "react-router-dom";
import logo from "./../../assets/Logo.svg";
import './Header.css';

const Headers = () => {
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
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/ragister">Ragister</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headers;