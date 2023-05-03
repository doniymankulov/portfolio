import React from 'react';
import logo from "./../img/header-icon.svg"

const Header = () => {
    return (
        <div>
            <div id="header">
                <div className="header">
                    <div className="LOGO">
                        <img src={logo} alt=""/>
                        <h2>YMANKULOV</h2>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;