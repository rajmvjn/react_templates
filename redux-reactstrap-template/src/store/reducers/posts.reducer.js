import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    failed: false
}

const reducer = ( state = initialState, action) => {
    
    switch(action.type) {
        case actionTypes.FETCH_POSTS:
            //console.log(action.posts)
            return {
                ...state,
                posts: [...action.posts]
            }
        case actionTypes.FETCH_POSTS_FAILED:
            return {
                ...state,
                failed: true
            }
        case actionTypes.REMOVE_POSTS:
            //console.log(action.post_id);
            //console.log(state.posts)
            const filterdPost = state.posts.filter(post => post.id !== action.post_id);
            //console.log(filterdPost);
            return {
                ...state,
                posts: filterdPost
            }
        default:
            return state;
    }
}

export default reducer;