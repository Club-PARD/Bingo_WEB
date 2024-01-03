// 나의 모든 워크스페이스 정보를 가져오는 API
// 입력변수는 사용자 id

import axios from "axios";
import { useNavigate } from "react-router-dom";

// 리턴 된 값이 list 형태이므로 이걸로 map을 받는 컴포넌트들 만들기
export const getAllRetrospect = async (e, navigate) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/v1/template/project/${e.projectId}`
        );

        // console.log("Result", response.data);

        return response.data;
    } catch (error) {
        // alert("회고 리스트 조회 중 오류 발생했습니다");
        // navigate("/");

        throw error;
    }
};

export const getRetrospect = async (e) => {
    const getData = {
        userId: 1,
        projectId: 1,
    };

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}api/v1/template/project/${e.workspaceId}/template/${e.retrospectId}`
        );
        // console.log("axios", response.data);
        return response.data;
    } catch (error) {
        alert("회고 상세 조회 중 오류 발생했습니다");

        throw error;
    }
};

export const postRetrospect = async (e) => {

    const data = {
        "appUserId": 2,
        "projectId": 17,
        "templateId": 36,
        "answerList": [{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변1"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변2"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변3"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변4"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변5"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변6"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변7"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변8"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변9"},]
    }
    console.log("data 체크 ", data);
    try {
        await axios.post(
            `${process.env.REACT_APP_URL}api/v1/retrospect/write`, data
        );

    } catch(error) {
        throw "postRetrospect Error > " + error;
    }
}
