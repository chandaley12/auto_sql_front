import React, {useEffect, useState} from "react";

// 3rd-party
import { GoogleLogin } from 'react-google-login'
import {useCookies} from "react-cookie";
import {connect} from 'react-redux'

// application
import * as user from "../../../Store/User";
import store from "../../../Store";

function LoginButton(props)
{
    // redux
    const {onLogin, onLogout} = props;

    // cookie
    const [cookies, setCookie, removeCookie] = useCookies(['account']);

    const [loggedIn, setLoggedIn] = useState(false);

    const [user, setUser] = useState({
        id: 0,
        email: '',
        name: '',
        imageUrl: '',
        expires_in: 0,
    });

    useEffect( () => {
        if (cookies.account)
        {
            setUser(Object.assign(cookies.account))
            setLoggedIn(true);
        }
    }, [])

    const googleLoginSuccess = (response) => {
        let payload = {
            id: response.profileObj.googleId,
            email: response.profileObj.email,
            name: response.profileObj.name,
            imageUrl: response.profileObj.imageUrl,
            expires_in: response.tokenObj.expires_in
        }
        onLogin(payload);
        setUser(Object.assign(store.getState().User))
        setCookie('account', payload, {maxAge: payload.expires_in});
        setLoggedIn(true);
        console.log("\"" + payload.id + "\" login");
    }
    const googleLoginFail = (error) => {
        console.error(error)
    }
    const logoutButton = () => {
        onLogout()
        removeCookie('account')
        window.location.replace('/')
    }

    return (
        <div>
            { loggedIn ?
                <div className="row">
                    <div className="card">
                        <img
                            className="card-img"
                            style={{
                                width: "40px",
                                height: "40px",
                            }}
                            src={user.imageUrl}/>
                    </div>
                    <div className="btn btn-light"
                        onClick={logoutButton}>
                        <h5
                            style={{
                                width: "100px"
                            }}
                        >{user.name}</h5>
                    </div>
                </div>
                :
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Google"
                    onSuccess={googleLoginSuccess}
                    onFailure={googleLoginFail}
                />
            }
        </div>
    );
}

const mapToDispatch = (dispatch) => ({
    onLogin: (action) => dispatch(user.login(action)),
    onLogout: () => dispatch(user.logout())
});

export default connect(null, mapToDispatch)(LoginButton);