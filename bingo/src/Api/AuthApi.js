/* eslint-disable */

import { Login } from "@mui/icons-material";

import axios from "axios";
import { useRecoilState } from "recoil";
import { loginUserState } from "../Contexts/Atom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const handleGoogleLogin = async (e) => {
    try {
        // const provider = new GoogleOAuthProvider(); // provider를 구글로 설정
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider); // popup을 이용한 signup
        const user = auth.currentUser;
        console.log("유저정보:  ", user);
        
        // console.log("test 여기인가?");
        const korea = await login(user);
        console.log("data 여기인가요?", korea);
        // e.setUserInfo(korea);
        console.log(e);

        return korea;
    } catch (error) {
        console.error("Google 로그인 에러:", error);
    }
};



// export function handleGoogleLogin() {
//     const provider = new GoogleAuthProvider(); // provider 구글 설정
//     signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
//       .then((data) => {
//         console.log(data); // console에 UserCredentialImpl 출력
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }


// 로그인 API
export const login = async (user) => {
    const data = {
        name: user.displayName,
        email: user.email,
        picture: user.photoURL,
        emailVerified: user.emailVerified,
    };
    console.log("double check", data);
    try {
        window.localStorage.clear();
        const response = await axios.post(
            `${process.env.REACT_APP_URL}auth/signIn`,
            data
        );

        console.log("API 성공!");
        console.log("LOGIN DATAS", response.data);
        localStorage.setItem("email", response.data.token);

        if (response.data.isSigned === 1) {
            window.location.href = "/UserApprove";
        }
        if (response.data.isSigned === 2) {
            window.location.href = "/WorkspaceList";
        }

        return response.data;
    } catch (error) {
        alert("(Login) 로그인 과정에서 문제가 발생했습니다");
        // window.location.href = "/";
        // console.error("Error in postInquiries:", error);
        throw error;
    }
};

// 로그아웃 API (예정) -> 뭐가 문제인지 알아나 보자
export const Logout = async (input) => {
    // 일단 여기까지는 불러와짐
    console.log("in", input);
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}auth/signOut/2`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );

        console.log(response.data);
        window.location.href = "/";
        return response.data;
    } catch {
        console.log("(Logout) 로그아웃 과정에서 문제가 발생했습니다");
    }
};

// 사용자 정보를 가져오는 API
// Bearer 다음은 반드시 한 칸 떼기
export const getUserData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}appUser/2`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("email"),
            },
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        window.location.href = "/login";
        alert("(getUserData) 로그인이 필요합니다.");
        // console.error("Error in getInquiries:", error);
        throw error;
    }
};