import React from 'react';
import {Button} from "react-bootstrap";

const Navigation = () => {
    return (
        <div className="mt-2">
            <Button className="mr-3" href="/">홈으로</Button>
            <Button className="mr-3" href="/vuerd-backoffice">Vuerd</Button>
        </div>
    );
};

export default Navigation;