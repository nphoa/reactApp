import * as actionTypes from './../Contants/actionType';

export const login = (login) =>{
    return {
        type:actionTypes.LOGIN,
        login:login
    }
}

export const login_success = (login) =>{
    return {
        type:actionTypes.LOGIN_SUCCESS,
        login:login
    }
}

export const logout = () => {
    return{
        type:actionTypes.LOGOUT
    }
}

export const getKeywords = () => {
    return {
        type:actionTypes.GET_KEYWORDS
    }
}