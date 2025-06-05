import { proxy } from 'valtio';

export const state = proxy({
    muted: false,
    currentVideo: 0,
    started: false,
    vidNames: ['Snana Purnima', 'Wood Picking', 'Wood Crafting'],
    showingBoard: false,
    currentBoard: 'sponsor',
})