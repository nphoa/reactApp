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