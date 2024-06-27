import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    value: 0
}

export const countSlicer = createSlice({
    name: 'name',
    initialState:initialState,
    reducers: {
        incrementValue: (state) => {
            state.value += 1;
        },
        decrementValue: (state) => {
            state.value -= 1;
        }
    }
})

export const { incrementValue, decrementValue } = countSlicer.actions;

export default countSlicer.reducer;