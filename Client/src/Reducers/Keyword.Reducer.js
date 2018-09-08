import * as types from '../Contants/actionType';

var initialState  = {
    keywords:[
        {
            keyword:'hello',
            keywordType:'s',
            vietnames:'Xin chao'
        },
        {
            keyword:'goodbye',
            keywordType:'s',
            vietnames:'Tam biet'
        },
        {
            keyword:'love',
            keywordType:'s',
            vietnames:'Tinh yeu'
        }
    ],
    keywordEditing:{}
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer