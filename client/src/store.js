import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; 
import postReducer from './features/posts/postSlice';
import pageLinkReducer from './features/pageLinks/pageLinkSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        pages: pageLinkReducer
    },
});