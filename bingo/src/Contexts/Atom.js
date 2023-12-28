// atom.js
import {atom} from 'recoil';

export const countState = atom({key: 'counter', default: 0});
export const titleState = atom({key: 'title', default: ''});
export const contentState = atom({key: "content", default: ''});

// 회고 생성과 관련된 정보를 저장하는 atom
export const retrospectiveState = atom({
    key: 'retrospective',
    default: {
        retrospectTitle: '', // 회고 타이틀
        selectedWays: '', // 선택된 템플릿 방식 (KPT, 4LS, 5F)
        questions: [
            {
                title: 'Keep',
                content: []
            }, {
                title: 'Problem',
                content: []
            }, {
                title: 'Try',
                content: []
            }
        ] // 각 섹션의 질문 내용
    }
});