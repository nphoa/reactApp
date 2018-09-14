import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Field,reduxForm} from 'redux-form';
import {Redirect}from 'react-router-dom';
import {connect} from 'react-redux';
import callApi from './../../API/callApi';
import * as urls from './../../API/url';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

class KeywordComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectUrl:false,
           
        }
    }
    componentWillMount(){
        if(this.props.match.params.id !== undefined){
            this.props.getKeywordById(this.props.match.params.id);
        }
    }
    componentDidMount(){
       
        this.props.getKeywordTypes();
    }
    renderField = ({input,type,meta:{ touched, error, warning}}) => {
        return (
          <div>
            <input {...input} type={type}  className="form-control" />
            {touched &&
              ((error && <span style={{color:'red'}}>{error}</span>))}
          </div>
        )
    }
    renderFieldSelect = ({input,children,meta:{ touched, error, warning}}) => {
        return (
          <div>
            <select {...input}  className="form-control">
            {children}
            </select>
            {touched &&
              ((error && <span style={{color:'red'}}>{error}</span>))}
          </div>
        )
      }
      submitForm = () => {
          let values = this.props.valuesForm.values;
          let token = 'Bearer '+sessionStorage.getItem('token');
          let fd = new FormData();
          fd.set('keyword',JSON.stringify(values));
          callApi(urls.url_post_saveKeyword,'POST',fd,token).then((res)=>{
                if(res.data.status == 200){
                    this.setState({
                        redirectUrl:true
                    });
                    this.props.freshKeyword();
                }
          }).catch((error)=>{
                alert('Error');
          })
            
      }
      showKeywordTypes = (keywordTypes) => {
          let result = null;
          result = keywordTypes.map((item,index)=>{
                return(
                    <option key={index} value={item.id}>{`Type:${item.type}---Vietnamese:${item.vietnamese}`}</option>
                )
          });
          return result;
      }
    render() {
        const { pristine, reset, submitting,valid,handleSubmit } = this.props;
        if(this.state.redirectUrl){
            return(
                <Redirect to='/keywords'/>
            )
        }
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col sm={6}>
                        <Card>
                            <CardHeader>
                                <strong>Add new</strong> keyword
                        </CardHeader>
                            <CardBody>
                                <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                                    <div className="form-group">
                                        <label>Keyword</label>
                                        <Field name="keyword" type="text" component={this.renderField} validate={required} />
                                    </div>
                                    <div className="form-group">
                                        <label>Type</label>
                                        <Field name="idType" component={this.renderFieldSelect} >

                                           {this.showKeywordTypes(this.props.keywordTypes)}
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label>Vietnames</label>
                                       
                                        <Field name="vietnamese" type="input" component='textarea' className='form-control' cols={50} rows={4} validate={required}/>
                                    </div>

                                    <button type="submit" disabled={submitting}  class="btn btn-info hvr-grow-rotate" style={{}}>Submit</button>
                                </form>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>



            </div>
        )
    }
}

var RF_keyword = reduxForm({
    form:'keyword',
    enableReinitialize :true
})(KeywordComponent);


RF_keyword = connect(
    state => ({
      initialValues: state.KeywordReducer.keywordEditing
    })
  )(RF_keyword);

  export default RF_keyword;