import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../api/api"


export const get_category = createAsyncThunk(
    'category/get_category',
    async (_, { fulfillWithValue }) => {
        try {
            const {data} =await api.get('/home/get-categorys')
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response)
        }
    }
)

export const homeReducer = createSlice({
    name: 'home',
    initialState: {
        categorys: [],
        products: [],
        latest_product: [],
        topRated_product: [],
        discount_product: []
    },
    reducers: {
    },
    extraReducers: {
        [get_category.fulfilled]: (state, { payload }) => {
            state.categorys = payload.categorys
        },

    }
})

export default homeReducer.reducer
