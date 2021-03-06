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
    keywordEditing:{
        id:0
    },
    keywordTypes:[]
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
        case types.GET_KEYWORDS_SUCCESS:
        console.log(123);
            state.keywords = action.keywords;
            return {...state};
            break;
        case types.GET_KEYWORD_TYPES_SUCCESS:
            state.keywordTypes = action.keywordTypes;
            return {...state};
            break;
        case types.GET_KEYWORD_BY_ID:
            let item = state.keywords.find((item)=>{
                return item.id ==action.id;
            })
            state.keywordEditing = item;
            return {...state}
            break;
        case types.FRESH_KEYWORD:
            
            state.keywordEditing = { id:0};
            return {...state}
            break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer