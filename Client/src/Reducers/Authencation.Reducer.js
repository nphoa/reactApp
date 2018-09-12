import * as types from '../Contants/actionType';

var initialState  = {
	isLogin:false,
	login:{
		email:'',
		password:''
	}
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			state.isLogin = true;
			sessionStorage.setItem('token',action.login.token);
			sessionStorage.setItem('userInfo',JSON.stringify(action.login.user));
			return {...state};
			break;
		case types.LOGOUT:
			state.isLogin = false;
			sessionStorage.clear();
			state.login = {};
			return {...state};
			break;
			
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer