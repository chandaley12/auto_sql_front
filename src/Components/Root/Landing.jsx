import React from "react";

// application
import * as Layout from '../index'

const Landing = () => {
    return (
        <div>
            <div>
                <div>
                    <Layout.Header/>
                </div>
                <div className="container">
                    <Layout.Home/>
                </div>
                <div>
                    <Layout.Footer/>
                </div>
            </div>
        </div>
    );
};
export default Landing;