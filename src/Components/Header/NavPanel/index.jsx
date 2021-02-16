import React from 'react'

// application
import Navigation from "../Navigation";
import SigninButton from "../UserButtons/SignInButton";
import SignupButton from "../UserButtons/SignupButton";


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
                            <SigninButton/>
                            <SignupButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default NavPanel;