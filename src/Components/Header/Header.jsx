// react
import React from 'react'

// application
import NavPanel from "./NavPanel";
import TitlePanel from "./TitlePanel";

import './Header.css'

const Header = () => {
    return (
        <div className="app-header">
            <TitlePanel/>
            <NavPanel/>
        </div>
    );
};

export default Header;