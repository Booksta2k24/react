import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    id: null,
    email: null,
    username: null
}

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(state, action);
            state.id = action.payload._id
            state.email = action.payload.email
            state.username = action.payload.firstName + action.payload.lastName
        },
        clearUser: (state) => {
            state.email = null;
            state.id = null;
        },
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

