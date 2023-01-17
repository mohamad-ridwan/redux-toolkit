import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: {},
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAction: (state, action)=>{
            state.user = action.payload
        },
    }
})

export const {userAction} = userReducer.actions

export default userReducer.reducer