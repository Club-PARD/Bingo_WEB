// 나의 모든 워크스페이스 정보를 가져오는 API 입력변수는 사용자 id

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChipData } from "../Contexts/Atom";


// 리턴 된 값이 list 형태이므로 이걸로 map을 받는 컴포넌트들 만들기
export const getAllTemplate = async (e, navigate) => {
    try {
        console.log(e);
        const response = await axios.get(
            `${process.env.REACT_APP_URL}template/user/${e.userid}/project/${e.projectId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        console.log("axios getAllTemplate", response.data);

        return response.data;
    } catch (error) {
        // alert("회고 리스트 조회 중 오류 발생했습니다"); navigate("/");

        throw error;
    }
};


export const getTemplate = async (e) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}template/project/${e.workspaceId}/template/${e.retrospectId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        console.log("axios getTemplate", response.data);
        return response.data;
    } catch (error) {
        alert("템플릿 상세 조회 중 오류 발생했습니다");

        throw error;
    }
};


// 리턴 된 값이 list 형태이므로 이걸로 map을 받는 컴포넌트들 만들기
export const getAllRetrospect = async (e, navigate) => {
    console.log("E", e);
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}retrospect/project/${e.projectId}/template/${e.templateId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        console.log("axios getAllRetrospect", response.data);

        return response.data;
    } catch (error) {
        // alert("회고 리스트 조회 중 오류 발생했습니다"); navigate("/");

        throw error;
    }
};

export const getRetrospect = async (e) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_URL}retrospect/project/${e.projectId}/template/${e.templateId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );
        console.log("axios getRetrospect", response.data);
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
        case "Ls4":
            return Array.from({ length: 9 }, () => "");
        case "F5":
            return Array.from({ length: 9 }, () => "");
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
        tagList: getTagListByTemplateType(e.templateType),
    };

    console.log("찐이야", retrosectData);

    try {
        await axios.post(
            `${process.env.REACT_APP_URL}template`,
            retrosectData,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("email"),
                },
            }
        );

        alert("회고 생성이 완료되었습니다.");
        navigate(`/WorkspaceView?workspaceId=${e.projectId}`);
    } catch (error) {
        throw "postRetrospect Error > " + error;
        // console.log("postRetrospect Error > " + error);
    }
};

export const postRetrospect = async (e, navigate) => {
    const answerList = [];

    e.retrospectQuestionsList.questionList.forEach((mainQuestion) => {
        mainQuestion.subQuestions.forEach((subQuestion, index) => {
            if (subQuestion.answerResponse) {
                answerList.push({
                    id: 0, // 이 부분은 적절한 값을 넣어주셔야 합니다.
                    subQuestionId: 0,
                    ans: subQuestion.answerResponse,
                });
            }
        });
    });

    const userId = parseInt(e.userId, 10);
    const projectId = parseInt(e.workspaceId, 10);
    const retrospectId = parseInt(e.retrospectId, 10);

    const data = {
        appUserId: userId,
        projectId: projectId,
        templateId: retrospectId,
        answerList: answerList,
        tagList: e.chipData,
        // "answerList": [{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변1"},{"id" :
        // 0, "subQuestionId" : 0, "ans" : "22차 회고 답변2"},{"id" : 0, "subQuestionId" : 0,
        // "ans" : "22차 회고 답변3"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고
        // 답변4"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변5"},{"id" : 0,
        // "subQuestionId" : 0, "ans" : "22차 회고 답변6"},{"id" : 0, "subQuestionId" : 0,
        // "ans" : "22차 회고 답변7"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고
        // 답변8"},{"id" : 0, "subQuestionId" : 0, "ans" : "22차 회고 답변9"},]
    };

    const chipInit = [
        {
            key: 0,
            label: "서로에 대한\n존중과\n신뢰가 있는",
            flag: false,
        },
        {
            key: 1,
            label: "소통이 활발한",
            flag: false,
        },
        {
            key: 2,
            label: "개선과 혁신을\n추구하는",
            flag: false,
        },
        {
            key: 3,
            label: "배우고자\n하는",
            flag: false,
        },
        {
            key: 4,
            label: "열정 있는",
            flag: false,
        },
        {
            key: 5,
            label: "개인의 역할이\n뚜렷한",
            flag: false,
        },
        {
            key: 6,
            label: "목표와\n성과가 명확한",
            flag: false,
        },
        {
            key: 7,
            label: "모두가\n협업하는",
            flag: false,
        },
        {
            key: 8,
            label: "일과 삶의\n균형이 있는",
            flag: false,
        },
    ];
    console.log("Result!!", data);
    console.log("chip Data", data.tagList);
    if (data.tagList != undefined) {
        console.log("data 체크 ", data);
        
        try {
            await axios.post(
                `${process.env.REACT_APP_URL}retrospect/write`,
                data,
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("email"),
                    },
                }
            );
            e.setChipData(chipInit);
            alert("회고 작성이 완료되었습니다.");
            // navigate(`/WorkspaceList`);
            navigate(`/WorkspaceView?workspaceId=${e.workspaceId}`);
        } catch (error) {
            alert("아쉽지만 빙고~")
            console.log("postRetrospect Error > " + error);
        }
    }
};
