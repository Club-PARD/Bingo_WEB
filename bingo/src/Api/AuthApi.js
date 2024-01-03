/* eslint-disable */

import { Login } from "@mui/icons-material";
import axios from "axios";

// 로그인 API
export const login = async (decodedToken) => {
  const data = {
      name : decodedToken.name,
      email : decodedToken.email,
      picture : decodedToken.picture,
      emailVerified : decodedToken.email_verified,
  }

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}auth/signIn`, data
    )

    console.log("API 성공!");
    console.log("LOGIN DATAS",response.data);
    localStorage.setItem("email",response.data.token);
    return response.data;
  } catch (error) {
    alert("로그인 과정에서 문제가 발생했습니다");
    window.location.href = '/';
    // console.error("Error in postInquiries:", error);
    throw error;
  }
};

// 로그아웃 API (예정)

// 사용자 정보를 가져오는 API
// Bearer 다음은 반드시 한 칸 떼기
export const getUserData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}appUser/2`, 
      {
        headers: { Authorization:"Bearer "+ localStorage.getItem("email") } ,
      }
    );
    
    console.log(response.data);
    return response.data;
  } 
  catch (error) {
    window.location.href = '/login';
    alert("로그인이 필요합니다.");
    // console.error("Error in getInquiries:", error);
    throw error;
  }
}
