import React, { Component } from 'react';
import{connect} from 'react-redux';
import KeywordComponent from '../Components/English/Keywords.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    keywords:state.KeywordReducer.keywords
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(KeywordComponent);