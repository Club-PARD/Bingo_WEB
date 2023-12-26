// atom.js
import { atom } from 'recoil';

export const countState = atom({ key: 'counter', default: 0 });
export const titleState = atom({ key: 'title', default: '' });
export const contentState = atom({ key: "content", default: '' });