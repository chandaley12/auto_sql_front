import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="mt-2">
                <Link className="btn btn-primary mr-3"
                    to="/">홈으로
                </Link>
                <Link className="btn btn-primary mr-3"
                    to="/vuerd-backoffice">
                    Vuerd
                </Link>
        </div>
    );
};

export default Navigation;