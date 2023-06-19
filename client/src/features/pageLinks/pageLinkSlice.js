import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

let apiUrl = `https://robertbagwell.onrender.com/v1/page`;
if (!import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === 'development') {
    apiUrl = `http://localhost/v1/page`;
} 





const initialState = {
    data: []
}

export const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        getAllPages: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const getAllPagesAsync = ()=> async (dispatch)=>{
    try {
        const response = await axios.get(apiUrl);
        return await dispatch(getAllPages(response.data))
    } catch (error) {
    console.error(error);
    }
}

export const { getAllPages, addIdTitle } = pageSlice.actions

export const showAllPages = (state)=> state.pages.data

export const showFirstPage = (state)=> state.pages.data[0]

export default pageSlice.reducer