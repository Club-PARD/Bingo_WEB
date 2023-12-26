import axios from "axios";


// 이 안에 있는 title, context, access가 파라미터
export const login = async () => {
  const data = {

  }
  // console.log('받아온 값 ', data);
  try {
    const response = await axios.get(
      process.env.REACT_APP_URL + `/auth/login/code/google`,
    );
    console.log("로그인 성공!");
    return response.data;
  } catch (error) {
    alert("로그인 과정에서 문제가 발생했습니다");
    window.location.href = '/';
    // console.error("Error in postInquiries:", error);
    throw error;
  }
};

// export const getInquiries = async () => {
//   try {
//     const response = await axios.get(
//       process.env.REACT_APP_URL + `inquiries`,
//       {
//         headers: { Authorization:"Bearer "+ localStorage.getItem("token") }  
//       }
//     );
//     // console.log(localStorage.getItem("token") );

//     const Inquiries = response.data;
//     // eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.J9ArRrgpS2mDTMc9Jx4xv0VcObD2rUy4zbBR85wG2F0

//     return Inquiries;
//   } catch (error) {
//     window.location.href = '/login';
//     alert("로그인이 필요합니다.");
//     // console.error("Error in getInquiries:", error);
//     throw error;
//   }
// };


// export const getOneInquiries = async (id) => {
//   try {
//     const response = await axios.get(
//       process.env.REACT_APP_URL + `inquiries/${id}`,
//       {
//         headers: { Authorization:"Bearer "+ localStorage.getItem("token") }  
//       }
//     );
//     return response.data;
//   } catch (error) {
//     alert("로그인이 필요합니다.");
//     window.location.href = '/login';
//     // console.error("Error in getInquiries:", error);
//     throw error;
//   }
// };

// //건의게시판
// export const postSuggests = async (title, content, access) => {
//   const data = {
//     title: title,
//     content: content,
//     access: access,
//   }
//   // console.log('포스트', data);

//   try {
//     const response = await axios.post(
//       process.env.REACT_APP_URL+`suggests`,
//       data,
//       {
//         headers: { Authorization:"Bearer "+ localStorage.getItem("token") }  
//       }
//     );
//     return response.data;
//   } catch (error) {
//     alert("로그인이 필요합니다.");
//     window.location.href = '/login';
//     // console.error("Error in postInquiries:", error);
//     throw error;
//   }
// };

// export const updateRecCnt = async (userId, suggestId) => {
//   const data = {
//     userId: parseInt(userId),
//     suggestId: suggestId,
//   };
  
//   // console.log('받아온 데이터 ' ,data);

//   try {
//     const response = await axios.post(
//       process.env.REACT_APP_URL+`suggests/${suggestId}/recommend`,
//       data,
//       {
//         headers: { Authorization:"Bearer "+ localStorage.getItem("token") }  
//       }
//     );
//     return response.data;
//   } catch (error) {
//     window.location.href = '/login';
//     alert("로그인이 필요합니다.");
//     // console.error("Error in recommendCnt update:", error);
//     throw error;
//   }
// };

// export const getSuggests = async () => {
//   try {
//     const response = await axios.get(process.env.REACT_APP_URL+`suggests`, {
//       headers: { Authorization:"Bearer "+ localStorage.getItem("token") }  
//     });
    
//     const Suggests = response.data;
//     const filteredSuggests = Suggests.filter((item) => item.hide === false);

//     return filteredSuggests;
//   } catch (error) {
//     window.location.href = '/login';
//     alert("로그인이 필요합니다.");
//     // console.error("Error in getOneSuggests:", error);
//     throw error;
//   }
// };

// export const getOneSuggest = async (id) => {
//   try {
//     const response = await axios.get(
//       process.env.REACT_APP_URL+`suggests/${id}`,
//       {
//           headers: { Authorization:"Bearer "+ localStorage.getItem("token") }  
//       }
//     );
//     return response.data;
//   } catch (error) {
//     window.location.href = '/login';
//     alert("로그인이 필요합니다.");
//     // console.error("Error in getOneSuggests:", error);
//     throw error;
//   }
// };