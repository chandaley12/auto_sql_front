import React from 'react'

// application
import Title from "../Title";

// style
import './TitlePanel.css'

const TitlePanel = () => {
    return (
        <div className="app-title-panel">
            <div className="container">
                <div className="row justify-content-center">
                    <Title/>
                </div>
            </div>
        </div>
    );
};
export default TitlePanel;