// atom.js
import {atom} from 'recoil';

// test
export const countState = atom({key: 'counter', default: 0});
export const titleState = atom({key: 'title', default: ''});
export const contentState = atom({key: 'content', default: ''});

// projectList(현재 이름 WorkspaceList)
export const ProjectTitleState = atom({key: 'projectTitle', default: ''});
export const ProjectDescState = atom({key: 'projectDesc', default: ''});
export const ProjectSelectedFileState = atom(
    {key: 'projectSelectedFile', default: ''}
);

export const loginUserState = atom({key: 'uniqueLoginUserKey', default: null});

// team evaluation in BingoBoard
export const ChipData = atom({
    key: 'chipData',
    default: [
        {
            key: 0,
            label: '존중하는',
            flag: true
        }, {
            key: 1,
            label: '열정적인',
            flag: false
        }, {
            key: 2,
            label: '도전적인',
            flag: true
        }, {
            key: 3,
            label: '의사소통이 잘 되는',
            flag: false
        }, {
            key: 4,
            label: '성실한',
            flag: true
        }, {
            key: 5,
            label: '인내심있는',
            flag: false
        }, {
            key: 6,
            label: '화목한',
            flag: true
        }, {
            key: 7,
            label: '분위기 좋은',
            flag: false
        }, {
            key: 8,
            label: '칭찬하는',
            flag: true
        }
    ]
});

export const UserList = atom({
    key: 'userList',
    default: [
        {
            name: '유저1',
            value: 0,
            chipData: ChipData
        }, {
            name: '유저2',
            value: 1,
            chipData: ChipData
        }, {
            name: '유저3',
            value: 3,
            chipData: ChipData
        }
    ]
});

// 회고 생성과 관련된 정보를 저장하는 atom
export const retrospectiveState = atom({
    key: 'retrospective',
    default: {
        retrospectTitle: '안녕', // 회고 타이틀
        selectedWays: 'KPT', // 선택된 템플릿 방식 (KPT, 4LS, 5F)
        questions: [
            {
                title: '',
                content: []
            }, {
                title: '',
                content: []
            }, {
                title: '',
                content: []
            }, {
                title: '',
                content: []
            }, {
                title: '',
                content: []
            }
        ] // 각 섹션의 질문 내용
    }
});

// workspace 생성할 때 사용되는 list
export const WorkspaceData = atom({
    key: 'workspaceData',
    default: [
        {
            name : "",
            desc : "",
            picture: "",
            code : "",
        },
    ]
});
