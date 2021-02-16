import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

// application
import MainPage from "./MainPage";

import './index.css'

const Home = () => {

    return (
        <div className="app-body">
            <Switch>
                <Route exact path="/" component={MainPage}/>

            </Switch>
        </div>
    );
};

export default Home;