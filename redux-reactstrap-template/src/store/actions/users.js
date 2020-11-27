import * as actionTypes from './actionTypes';
import axios from '../../utils/axios/axios.users';

const setUsers = (users) => {
    return {
        type: actionTypes.FETCH_POSTS,
        users: users
    }
}

const setError = () => {
    return {
        type: actionTypes.FETCH_USER_FAILED
    }
}

export const initUsers = () => {
    return dispatch => {
        axios.get('users').then(users => {
            dispatch(setUsers(users));
        }).catch(err => {
            dispatch(setError())
        })
    }
}

