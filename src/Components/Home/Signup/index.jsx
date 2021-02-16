// react
import React, {useState} from 'react'

// 3rd Party
import { GoogleLogin } from 'react-google-login'

const Signup = () => {

    const [user, setUser] = useState({
        id: '',
        name: '',
        provider: 'google',
    })

    const googleLoginSuccess = (response) => {
        console.log(response)
    }
    const googleLoginFail = (error) => {
        console.error(error)
    }

    return (
        <div style={{
            display: "flex",
            flexFlow: "column warp",
        }}>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Google"
                onSuccess={googleLoginSuccess}
                onFailure={googleLoginFail}
            />
        </div>
    );
};
export default Signup;