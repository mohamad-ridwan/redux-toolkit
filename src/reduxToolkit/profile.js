import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: {
        nama: 'Ulfa Lailatussyyifa',
        gender: 'Wanita',
        umur: '14',
        pasangan: 'Ridwan'
    }
}

const profile = createSlice({
    name: 'profile-store',
    initialState,
    reducers: {
        submitEditProfile: (state, action) => {
            const {nama, gender, umur, pasangan} = action.payload ? {...action.payload} : {}
            state.users = {
                nama: nama,
                gender: gender,
                umur: umur,
                pasangan: pasangan
            }
        }
    }
})

export const {submitEditProfile} = profile.actions

export default profile.reducer