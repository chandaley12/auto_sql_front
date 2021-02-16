import React from 'react'

// application
import Navigation from "../Navigation";
import LoginButton from "../LoginButton/LoginButton";


// style
import './NavPanel.css'

const NavPanel = () => {
    return (
        <div className="app-nav-panel">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Navigation/>
                    </div>
                    <div className="col">
                        <div className="row mt-2">
                            <LoginButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default NavPanel;