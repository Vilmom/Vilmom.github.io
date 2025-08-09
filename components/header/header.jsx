import React from 'react';
import './header.css'
import {useNavigate, useLocation} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header-alt">
            <nav className="primary-nav">
                <div className="primary-nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <button className="nav-button" type="button" onClick={() => navigate("/")}>
                                <span className="nav-text">Vilson Zheng</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;