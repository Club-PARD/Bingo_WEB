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