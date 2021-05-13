import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        loaded(state, action) {
            return action.payload
        }
    }
})

export const { loaded } = inventorySlice.actions

export default inventorySlice.reducer