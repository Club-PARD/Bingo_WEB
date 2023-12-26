import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { login } from "../../Api/AuthApi";

const GoogleLoginButton = () => {
    //const clientId = '797219813265-6ttnkh7is7q3ieb6ek4p0ngn6d5pa0pf.apps.googleusercontent.com';
    const navigate = useNavigate();

    return (
        <>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                        navigate("/Home");
                    }}
                    onFailure={(err) => {
                        console.log(err);
                        navigate("/");
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;