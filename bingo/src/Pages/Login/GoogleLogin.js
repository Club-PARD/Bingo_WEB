import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { login } from "../../Api/AuthApi";
import { jwtDecode } from 'jwt-decode';

const LoginDummy = [
    {
        email: "",
        email_verified: "",
        name: "",
        jti: "",
        picture: "",
    },
];

const GoogleLoginButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        const decodedToken = jwtDecode(credentialResponse.credential);
                        console.log(decodedToken);
                        
                        // 받아온 값을 기반으로 데이터 갱신하기
                        const updatedData = LoginDummy.map(dummy => {
                            return Object.keys(dummy).reduce((acc, key) => {
                                acc[key] = decodedToken[key] || dummy[key];
                                return acc;
                            }, {});
                        });
                        // 성공이라고 콘솔에 남기기
                        console.log("로그인 성공!");
                        // api로 정보 넘겨주기
                        // 페이지 이동
                        navigate("/WorkspaceList");
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