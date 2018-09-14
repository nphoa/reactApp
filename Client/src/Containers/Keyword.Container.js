import React, { Component } from 'react';
import{connect} from 'react-redux';
import KeywordComponent from '../Components/English/Keyword.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    keywordTypes:state.KeywordReducer.keywordTypes,
    valuesForm:state.form.keyword
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getKeywordTypes:() => {
        dispatch(actions.getKeywordTypes())
      },
      getKeywordById:(id) => {
        dispatch(actions.getKeywordById(id))
      },
      freshKeyword:()=>{
        dispatch(actions.freshKeyword())
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(KeywordComponent);