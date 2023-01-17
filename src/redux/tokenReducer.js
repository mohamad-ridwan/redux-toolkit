import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userToken: null,
}

export const tokenReducer = createSlice({
    name: 'token',
    initialState,
    reducers: {
        tokenAction: (state, action)=>{
            state.userToken = action.payload
        }
    }
})

export const {tokenAction} = tokenReducer.actions

export default tokenReducer.reducer