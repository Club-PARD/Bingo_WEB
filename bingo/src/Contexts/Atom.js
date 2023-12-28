// atom.js
import { atom } from 'recoil';

//test
export const countState = atom({ key: 'counter', default: 0 });
export const titleState = atom({ key: 'title', default: '' });
export const contentState = atom({ key: "content", default: '' });

//projectList(현재 이름 WorkspaceList)
export const ProjectTitleState = atom({ key: "projectTitle", default: ''});
export const ProjectDescState = atom({ key: "projectDesc", default: ''});
export const ProjectSelectedFileState = atom({ key: "projectSelectedFile", default: ''});

//team evaluation in BingoBoard
export const ChipData = atom({
  key: 'chipData',
  default: [
    { key: 0, label: '존중하는', flag: false },
    { key: 1, label: '열정적인', flag: false },
    { key: 2, label: '도전적인', flag: false },
    { key: 3, label: '의사소통이 잘 되는', flag: false },
    { key: 4, label: '성실한', flag: false },
    { key: 5, label: '인내심있는', flag: false },
    { key: 6, label: '화목한', flag: false },
    { key: 7, label: '분위기 좋은', flag: false },
    { key: 8, label: '칭찬하는', flag: false },
  ],
});
export const UserList = atom({
  key: 'userList',
  default: [
    { name: '유저1', value: 0, chipData: ChipData },
    { name: '유저2', value: 1, chipData: ChipData },
    { name: '유저3', value: 3, chipData: ChipData },
  ],
});