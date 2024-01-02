import axios from "axios";

const WorkspaceData = {
    name : "Wade",
    description : "Male",
    code : "1234",
};

// 새로운 워크스페이스 생성 API
// name. desc. code 를 받아와서 post로 보낸다 -> response data를 받는다 (제대로 갔는지 확인용)
export const createWorkspace = async (data) => {
  const postData = {
    name: data.title,
    description: data.desc,
    code: data.code,
  };
  try {
    const response = await axios.post(
      "http://172.17.188.80:8080/api/v1/project",
      postData
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    alert("생성 중 오류 발생했습니다");

    throw error;
  }
};

// 나의 모든 워크스페이스 정보를 가져오는 API
// 입력변수는 사용자 id
// 리턴 된 값이 list 형태이므로 이걸로 map을 받는 컴포넌트들 만들기
export const getAllProjects = async (e, navigate) => {
  try {
    const response = await axios.get(
      `http://13.209.82.115:8080/api/v1/project/` + e.userid
    );

    return response.data;
  } catch (error) {
    alert("프로젝트 리스트 조회 중 오류 발생했습니다");
    navigate("/Login");
    throw error;
  }
};

export const getProject = async () => {
  const getData = {
    userId: 1,
    projectId: 1,
  };

  try {
    const response = await axios.get(
      //   `http://172.17.188.80:8080/api/v1/project/${id}`
      "http://172.17.188.80:8080/api/v1/project",
      getData
    );

    return console.log(response.data);
  } catch (error) {
    alert("프로젝트 상세 조회 중 오류 발생했습니다");

    throw error;
  }
};

// 워크스페이스 조인하기 
export const postProject = async (data) => {
    const postData = {
        // 실제 사용 시에는 7,14, "" 가 아니라 실제 정보를 연동하면 된다
        userId : 7,
        projectId : 22,
        code : "",
        role : "TEAM_LEADER",
    }
    try {
        const response = await axios.post(
            "http://172.17.188.80:8080/api/v1/enrollment",
            postData
        )
    return console.log(response.data);
    }
    catch (error) {
        console.log(error);
        alert ("팀원 직위 설정 중 오류가 발생했습니다");
    }  
};

// // 워크스페이스 조인하기 (새로 만든 것 -> 이거 사용하면 된다)
// export const joinProject = async (data) => {
//     const postData = {
//       name: data.title,
//       description: data.desc,
//       code: data.code,
//     };
//     try {
//       const response = await axios.post(
//         "http://172.17.188.80:8080/api/v1/project",
//         postData
//       );
  
//       console.log(response.data);
  
//       const joinData = {
//         userId: 7,
//         projectId: 19,
//         code: "",
//         role: "TEAM_LEADER",
//       };
//       try {
//         const response = await axios.post(
//           "http://172.17.188.80:8080/api/v1/enrollment",
//           joinData
//         );
//         console.log(response.data);
//       } catch (error) {
//         alert("팀원 직위 추가(ver2_2) 중 오류가 발생했습니다");
//       }
  
//       return response.data;
//     } catch (error) {
//       alert("생성 중 오류 발생했습니다");
//       throw error;
//     }
//   };
  