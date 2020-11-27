import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    failed: false
}

const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USERS:
            return {
                ...state,
                posts: [...action.users]
            }
        case actionTypes.FETCH_USER_FAILED:
            return {
                ...state,
                failed: true
            }
        default:
            return state;
    }
}

export default reducer;