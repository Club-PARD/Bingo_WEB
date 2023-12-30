import { Login } from "@mui/icons-material";
import axios from "axios";

// 로그인 API
export const login = async (decodedToken) => {
  const data = {
      name : decodedToken.name,
      email : decodedToken.email,
      emailVerified : decodedToken.email_verified,
  }
  // console.log('받아온 값 ', data);
  try {
    const response = await axios.post(
      `http://13.209.82.115:8080/api/v1/auth/signIn`, data
    )

    console.log("API 성공!");
    // console.log("아래의 정보는 response.data입니다.");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    alert("로그인 과정에서 문제가 발생했습니다");
    window.location.href = '/';
    // console.error("Error in postInquiries:", error);
    throw error;
  }
};

// 로그아웃 API

// 사용자 정보를 가져오는 API
export const getUserData = async () => {
  try {
    const response = await axios.get(
      `http://172.30.1.34:8080/api/v1/appuser/7`,
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