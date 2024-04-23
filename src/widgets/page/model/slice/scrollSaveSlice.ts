import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

interface ScrollSavePayload {
    path: string;
    position: number;
}

interface ScrollResetPayload {
    path: string;
}

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<ScrollSavePayload>) => {
            state.scroll[payload.path] = payload.position;
        },
        resetScrollPosition: (state) => {
            state.scroll = {};
        },
        resetScrollPositionForPage: (state, { payload }: PayloadAction<ScrollResetPayload>) => {
            state.scroll[payload.path] = 0;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
