// react
import React from "react";

// 3rd party
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

// application
import Landing from "./Landing";
import Vuerd from "../Home/Vuerd";

const Root = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/vuerd-backoffice" component={Vuerd}/>
                <Route path='/' component={Landing}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Root;