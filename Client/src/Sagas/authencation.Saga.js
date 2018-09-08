import * as types from '../Contants/actionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/url';
import callApi from '../API/callApi';
import * as actions from '../Actions/index';


function* login(action){
     
      let data = null;
      const {email,password} = action.login;
      if(email == 'nphoa7777@gmail.com' && password == '123456'){
          data = action.login;
      }
    //  yield callApi(`${urls.url_login}`,'POST',action.login).then((res)=>{
    //      data = res.data.data;
    //  });
    if(data!= null || data!= undefined){
        yield put(actions.login_success(data));
    } 
 }
 
 
 export function* watchLogin(){
     yield takeEvery(types.LOGIN,login);
 }