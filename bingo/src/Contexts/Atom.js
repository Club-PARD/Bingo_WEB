/* eslint-disable */

// atom.js
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// test
export const countState = atom({
    key: "counter",
    default: 0,
    effects_UNSTABLE: [persistAtom],
});
export const titleState = atom({
    key: "title",
    default: "",
    effects_UNSTABLE: [persistAtom],
});
export const contentState = atom({
    key: "content",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

// projectList(현재 이름 WorkspaceList)
export const ProjectTitleState = atom({
    key: "projectTitle",
    default: "",
    effects_UNSTABLE: [persistAtom],
});
export const ProjectDescState = atom({
    key: "projectDesc",
    default: "",
    effects_UNSTABLE: [persistAtom],
});
export const ProjectSelectedFileState = atom({
    key: "projectSelectedFile",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const retrospectQuestionsListState = atom({
    key: "retrospectQuestionsList",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

export const loginUserState = atom({
    key: "uniqueLoginUserKey",
    default: () => ({
        exprTime: 10000,
        appUser: {
            email: "",
            name: "",
            picture: "",
            token: "",
            id: "",
            answerList: [],
            enrollmentList: [],
            subQuestionList: [],
        },
    }),
    effects_UNSTABLE: [persistAtom],
});

// team evaluation in BingoBoard
export const ChipData = atom({
    key: "chipData",
    default: [
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
    ],
    effects_UNSTABLE: [persistAtom],
});

export const UserList = atom({
    key: "userList",
    default: [
        {
            name: "유저1",
            value: 0,
            chipData: ChipData,
        },
        {
            name: "유저2",
            value: 1,
            chipData: ChipData,
        },
        {
            name: "유저3",
            value: 3,
            chipData: ChipData,
        },
    ],
    effects_UNSTABLE: [persistAtom],
});

// 회고 생성과 관련된 정보를 저장하는 atom
export const retrospectiveState = atom({
    key: "retrospective",
    default: {
        retrospectTitle: "회고 이름을 입력하세요", // 회고 타이틀
        selectedWays: "KPT", // 선택된 템플릿 방식 (KPT, 4LS, 5F)
        questions: [
            {
                title: "",
                content: [],
            },
            {
                title: "",
                content: [],
            },
            {
                title: "",
                content: [],
            },
            {
                title: "",
                content: [],
            },
            {
                title: "",
                content: [],
            },
        ], // 각 섹션의 질문 내용
    },
    effects_UNSTABLE: [persistAtom],
});

// workspace 생성할 때 사용되는 list
export const WorkspaceData = atom({
    key: "workspaceData",
    default: [
        {
            id: null,
            name: "",
            desc: "",
            code: "",
            role: "",
        },
    ],
    effects_UNSTABLE: [persistAtom],
});

export const RetrospectData = atom({
    key: "retrospectData",
    default: [
        {
            id: null,
            name: "",
            questionList: [
                {
                    id: null,
                    mainQuestions: "",
                    subQuestionList: [
                        {
                            id: null,
                            subQuestion: "",
                        },
                    ],
                },
            ],
        },
    ],
    effects_UNSTABLE: [persistAtom],
});

export const WorkspaceInfo = atom({
    key: "workspaceInfo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const UrlInfo = atom({
    key: "urlInfo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});
