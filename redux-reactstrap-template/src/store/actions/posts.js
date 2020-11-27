import * as actionTypes from './actionTypes';
import axios from '../../utils/axios/axios.posts';

const setPosts = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts: posts
    }
}

const setError = () => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED
    }
}

export const deletePost = (post_id) => {    
    return {
        type: actionTypes.REMOVE_POSTS,
        post_id: post_id
    }
}

export const initPosts = () => {
    return dispatch => {
        axios.get('posts').then(posts => {
            dispatch(setPosts(posts.data));
        }).catch(err => {
            dispatch(setError())
        })
    }
}

