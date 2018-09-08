import * as types from '../Contants/actionType';

var initialState  = {
	isLogin:true,
	login:{
		email:'',
		password:''
	}
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			console.log(action);
			state.login = action.login;
			state.isLogin = true;
			return {...state};
			break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer