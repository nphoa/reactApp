import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Field,reduxForm} from 'redux-form';

import {connect} from 'react-redux';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

class KeywordComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            otherState:'',
           
        }
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
            alert(123);
      }
    render() {
        const { pristine, reset, submitting,valid,handleSubmit } = this.props;
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
                                        <Field name="keywordType" component={this.renderFieldSelect} >

                                           <option>S</option>
                                           <option>V</option>
                                           <option>O</option>
                                           <option>Adv</option>
                                           <option>A</option>
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label>Vietnames</label>
                                       
                                        <Field name="vietnames" type="input" component='textarea' className='form-control' cols={50} rows={4} validate={required}/>
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