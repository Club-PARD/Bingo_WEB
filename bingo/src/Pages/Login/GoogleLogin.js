import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { getUserData, login } from "../../Api/AuthApi";
import { jwtDecode } from "jwt-decode";
import { loginUserState } from "../../Contexts/Atom";
import { useRecoilState, useSetRecoilState } from "recoil";

const LoginDummy = [
    {
        email: "",
        email_verified: "",
        name: "",
        // jti: "",
        // picture: "",
    },
];

const GoogleLoginButton = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useRecoilState(loginUserState);

    return (
        <>
            <GoogleOAuthProvider
                clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
            >
                <GoogleLogin
                    onSuccess={async (credentialResponse) => {
                        const decodedToken = jwtDecode(
                            credentialResponse.credential
                        );

                        // const updatedData = LoginDummy.map(dummy => {
                        //     return Object.keys(dummy).reduce((acc, key) => {
                        //         acc[key] = decodedToken[key] || dummy[key];
                        //         return acc;
                        //     }, {});
                        // });

                        try {
                            // 로그인 API 호출
                            const data = await login(decodedToken);

                            // 업데이트된 데이터 확인은 여기에서 이루어져야 합니다.
                            console.log("로그인 성공?!", data);

                            // 상태 업데이트
                            setUserInfo(data);
                            console.log("USERID", userInfo.appUser.id);

                            if(data.isSigned == 1) {
                                window.location.href = "/UserApprove";
                            }
                            alert("isSigned : ",data.isSigned);
                            window.location.href = "/WorkspaceList"

                            // navigate("/WorkspaceList");
                        } catch (error) {
                            console.error("로그인 에러", error);
                        }
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
