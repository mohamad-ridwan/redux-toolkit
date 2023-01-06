import {configureStore} from '@reduxjs/toolkit'
import profile from './profile'

export const profileStore = configureStore({
    reducer: {
        profile: profile
    }
})