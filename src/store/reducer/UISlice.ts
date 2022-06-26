import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUI {
    trigger: boolean
}

const initialState: IUI = {
    trigger: false
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        triggerIsActive(state, action: PayloadAction<boolean>){
            state.trigger = action.payload
        }
    }
});

export const { triggerIsActive } = uiSlice.actions
export default uiSlice.reducer;