import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
    const clientId = '797219813265-6ttnkh7is7q3ieb6ek4p0ngn6d5pa0pf.apps.googleusercontent.com';
    const navigate = useNavigate();

    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                        navigate("/home");
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;