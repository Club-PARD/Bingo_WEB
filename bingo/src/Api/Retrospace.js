// 나의 모든 워크스페이스 정보를 가져오는 API
// 입력변수는 사용자 id

import axios from "axios";
import { useNavigate } from "react-router-dom";

// 리턴 된 값이 list 형태이므로 이걸로 map을 받는 컴포넌트들 만들기
export const getAllRetrospect = async (e, navigate) => {
    try {
        const response = await axios.get(
            `http://13.209.82.115:8080/api/v1/template/appUser/${e.userid}/project/${e.projectId}`
        );

        // console.log("Result", response.data);

        return response.data;
    } catch (error) {
        // alert("회고 리스트 조회 중 오류 발생했습니다");
        // navigate("/");

        throw error;
    }
};

export const getRetrospect = async () => {
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
