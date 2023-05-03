import React from 'react';
import logos from "../img/header-icon.svg";
import "./footer.css";
const Footer = () => {
    return (
        <div>
            <div id="footer">
                <div className="container">
                    <div className="footer">
                        <div className="share">
                            <img src={logos} alt=""/>
                            <h3>YMANKULOV</h3>
                            <h6>Copyright © 2023, YMANKULOV</h6>
                        </div>
                        <nav className="navbar">
                            <a href="#">Home</a>
                            <br/>
                            <a href="#">About</a>
                            <br/>
                            <a href="#">portfolio</a>
                            <br/>
                            <a href="#">Contact</a>
                        </nav>
                        <div className="contact">
                            <a href="">Contact</a>
                            <br/>
                            <a href="">email:dymankulov@gmail.com</a>
                            <br/>
                            <a href="https://www.instagram.com/denwin99/">inst:denwin99</a>
                            <br/>
                            <a href="tel:+996704828800">+996704828800</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;