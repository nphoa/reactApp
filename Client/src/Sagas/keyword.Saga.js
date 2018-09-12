import * as types from '../Contants/actionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/url';
import callApi from '../API/callApi';
import * as actions from '../Actions/index';
import swal from 'sweetalert';

function* getKeywords(action){
     console.log(action);
    
 }
 
 
 export function* watchGetKeywords(){
     yield takeEvery(types.GET_KEYWORDS,getKeywords);
 }