import { createSlice } from "@reduxjs/toolkit";

const initialStateSearch = {
    searchField: ''
}

const searchRobotsSlice = createSlice({
    name: 'searchField',
    initialState: initialStateSearch,
    reducers: {
        changeSearchField(state, action) {
            return {
                    ...state,
                    searchField: action.payload
                }
        }
    }
})

export const { changeSearchField } = searchRobotsSlice.actions;

export default searchRobotsSlice.reducer;
