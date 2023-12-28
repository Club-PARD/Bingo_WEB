// atom.js
import {atom} from 'recoil';

export const countState = atom({key: 'counter', default: 0});
export const titleState = atom({key: 'title', default: ''});
export const contentState = atom({key: "content", default: ''});

// 회고 생성과 관련된 정보를 저장하는 atom
export const retrospectiveState = atom({
    key: 'retrospective',
    default: {
        // 회고 타이틀
        retrospectTitle: '', 
        // 선택된 템플릿 방식 (KPT, 4LS, 5F)
        selectedWays: '', 
        // 질문 모음
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
            }
        ] // 각 섹션의 질문 내용
    }
});