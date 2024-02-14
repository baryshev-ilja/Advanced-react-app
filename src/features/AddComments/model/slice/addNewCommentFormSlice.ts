import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchProfileData.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //             state.form = action.payload;
    //         })
    //         .addCase(fetchProfileData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         })
    //         .addCase(updateProfileData.pending, (state) => {
    //             state.isLoading = true;
    //             state.validateErrors = undefined;
    //         })
    //         .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //             state.form = action.payload;
    //             state.readonly = true;
    //             state.validateErrors = undefined;
    //         })
    //         .addCase(updateProfileData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.validateErrors = action.payload;
    //         });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
