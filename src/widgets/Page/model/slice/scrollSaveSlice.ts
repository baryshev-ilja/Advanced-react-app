import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from 'widgets/Page';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

interface ScrollSavePayload {
    path: string;
    position: number;
}

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<ScrollSavePayload>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
