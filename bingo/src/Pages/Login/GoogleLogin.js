import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { login } from "../../Api/AuthApi";
import { jwtDecode } from 'jwt-decode';

const LoginDummy = {
    
}

const GoogleLoginButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        const decodedToken = jwtDecode(credentialResponse.credential);
                        console.log(decodedToken);
                        console.log("로그인 성공!");
                        navigate("/Home");
                    }}
                    onError={() => {
                        console.log("Login Failed");
                        navigate("/");
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;