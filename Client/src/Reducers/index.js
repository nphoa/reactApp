import {combineReducers} from 'redux';
import AuthencationReducer from './Authencation.Reducer';
import KeywordReducer from './Keyword.Reducer';
import {reducer as formReducer} from 'redux-form';
const appReducers = combineReducers({
    AuthencationReducer:AuthencationReducer,
    KeywordReducer:KeywordReducer,
    form:formReducer
});

export default appReducers