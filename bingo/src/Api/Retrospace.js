// 나의 모든 워크스페이스 정보를 가져오는 API 입력변수는 사용자 id

import axios from "axios";
import {useNavigate} from "react-router-dom";

// 리턴 된 값이 list 형태이므로 이걸로 map을 받는 컴포넌트들 만들기
export const getAllRetrospect = async (e, navigate) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}template/project/${e.projectId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email")
                }
            }
        );
        // console.log("Result", response.data);

        return response.data;
    } catch (error) {
        // alert("회고 리스트 조회 중 오류 발생했습니다"); navigate("/");

        throw error;
    }
};

export const getRetrospect = async (e) => {
    const getData = {
        userId: 1,
        projectId: 1
    };

    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}template/project/${e.workspaceId}/template/${e.retrospectId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email")
                }
            }
        );
        console.log("axios", response.data);
        return response.data;
    } catch (error) {
        alert("회고 상세 조회 중 오류 발생했습니다");

        throw error;
    }
};


const getTagListByTemplateType = (templateType) => {
    switch (templateType) {
        case "KPT":
            return Array.from({ length: 9 }, () => "");
        case "4LS":
            return Array.from({ length: 12 }, () => "");
        case "5F":
            return Array.from({ length: 15 }, () => "");
        default:
            return [];
    }
};

export const postRetrospectCreated = async (e, navigate) => {
    const userId = parseInt(e.userId, 10);
    const projectId = parseInt(e.projectId, 10);

    const retrosectData = {
        name: e.name,
        userId: userId,
        projectId: projectId,
        templateType: e.templateType,
        questionRequestList: e.questionRequestList,
        tagList: getTagListByTemplateType(e.templateType)
    };

    console.log("찐이야", retrosectData);

    try {
        await axios.post(`${process.env.REACT_APP_URL}template`, retrosectData, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("email")
            }
        });

        
        alert("회고 생성이 완료되었습니다.");
        navigate(`/WorkspaceView?workspaceId=${e.projectId}`);
    } catch (error) {
        throw "postRetrospect Error > " + error;
        // console.log("postRetrospect Error > " + error);
    }
};

export const postRetrospect = async (e, navigate) => {

    const answerList = [];

    e
        .retrospectQuestionsList
        .questionList
        .forEach((mainQuestion) => {
            mainQuestion
                .subQuestionList
                .forEach((subQuestion) => {
                    if (subQuestion.answerResponse) {
                        answerList.push({
                            id: 0, // 이 부분은 적절한 값을 넣어주셔야 합니다.
                            subQuestionId: subQuestion.id,
                            ans: subQuestion.answerResponse
                        });
                    }
                });
        });

    const data = {
        "appUserId": e.userId,
        "projectId": e.workspaceId,
        "templateId": e.retrospectId,
        "answerList": answerList,
        "tagList": e.chipData
        // "answerList": [{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변1"},{"id" :
        // 0, "subQuestionId" : 0, "ans" : "22차 회고 답변2"},{"id" : 0, "subQuestionId" : 0,
        // "ans" : "22차 회고 답변3"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고
        // 답변4"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변5"},{"id" : 0,
        // "subQuestionId" : 0, "ans" : "22차 회고 답변6"},{"id" : 0, "subQuestionId" : 0,
        // "ans" : "22차 회고 답변7"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고
        // 답변8"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변9"},]
    }
    console.log("data 체크 ", data);
    try {
        await axios.post(`${process.env.REACT_APP_URL}retrospect/write`, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("email")
            }
        });

        alert("회고 작성이 완료되었습니다.");
        navigate(`/WorkspaceList`)

    } catch (error) {
        throw "postRetrospect Error > " + error;
    }
}
