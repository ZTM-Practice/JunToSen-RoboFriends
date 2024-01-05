import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

const requestRobotsSlice = createSlice({
    name: 'robots',
    initialState: initialStateRobots,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(requestRobots.pending, (state, action) => {
                return {
                    ...state,
                    isPending: true
                };
            })
            .addCase(requestRobots.fulfilled, (state, action) => {
                return {
                    ...state,
                    robots: action.payload,
                    isPending: false
                };
            })
            .addCase(requestRobots.rejected, (state, action) => {
                return {
                    ...state,
                    error: action.payload,
                    isPending: false
                };
            })
    }
})

export const requestRobots = createAsyncThunk(
    'robots/fetchRobots', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    }
)

export default requestRobotsSlice.reducer;
