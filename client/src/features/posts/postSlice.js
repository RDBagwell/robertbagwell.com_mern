import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = `http://localhost:5000/v1/post`

const initialState = {
    post: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getAllPosts: (state, action) => {
            state.post = action.payload;
        }
    }
})

export const getAllPostsAsync = ()=> async (dispatch)=>{
    try {
        const response = await axios.get(apiUrl);
        return await dispatch(getAllPosts(response.data))
    } catch (error) {
    console.error(error);
    }
}

export const { getAllPosts } = postSlice.actions

export const showAllPosts = (state)=> state.posts.post

export default postSlice.reducer