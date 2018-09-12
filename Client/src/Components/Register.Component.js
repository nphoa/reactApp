import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../Actions/index';
import { Button, Card, CardBody, CardFooter,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class RegisterComponent extends Component{
    constructor(props) {
      super(props);
      this.state = {
        email:'',
        password:''
      }
    }
    componentWillMount(){

    }
    onChangeEvent = (event) =>{
      
       
        
    }
    onSubmitForm = (event) => {
      
    }
    render(){
        if(this.props.isLogin){
          return (
            <Redirect to ='/'/>
          )
        }
        return(
            <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="6">
                  <Card className="mx-4">
                    <CardBody className="p-4">
                      <Form>
                        <h1>Register</h1>
                        <p className="text-muted">Create your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Username" autoComplete="username" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Email" autoComplete="email" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" autoComplete="new-password" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                        </InputGroup>
                        <Button color="success" block>Create Account</Button>
                      </Form>
                    </CardBody>
                    <CardFooter className="p-4">
                      <Row>
                        <Col xs="12" sm="6">
                          <Button className="btn-facebook" block><span>facebook</span></Button>
                        </Col>
                        <Col xs="12" sm="6">
                          <Button className="btn-twitter" block><span>twitter</span></Button>
                        </Col>
                      </Row>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        )    
    }
}
const mapStateToProps = (state) => {
  return {
   
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterComponent);