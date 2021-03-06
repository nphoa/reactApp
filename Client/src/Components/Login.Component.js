import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import * as actions from '../Actions/index';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class LoginComponent extends Component{
    constructor(props) {
      super(props);
      this.state = {
        email:'',
        password:''
      }
    }
    componentWillMount(){

      function* anotherGenerator(i){
        yield i + 1;
        yield i + 2;
        yield i + 3;
      }

      function* generator(i){
        yield i + 1;
        yield i + 7;
        yield* anotherGenerator(i);
        yield i + 10;
      }
       var gen = generator(10);
      console.log('kq la 10' + gen.next().value);
      console.log('kq la 17' + gen.next().value);

      console.log('kq la 18 ' + gen.next().value);
      console.log('kq la 20 ' + gen.next().value);
      console.log('kq la 23 ' + gen.next().value);
      console.log('kq la 33 ' + gen.next().value);
    }
    onChangeEvent = (event) =>{
      this.setState({
        [event.target.name]:event.target.value
      })
       
        
    }
    onSubmitForm = (event) => {
      event.preventDefault();
      console.log(this.state);
      this.props.login(this.state);
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
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form onSubmit={this.onSubmitForm}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Email" autoComplete="username" name="email" onChange={this.onChangeEvent} />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={this.onChangeEvent} />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button color="primary" type="submit" className="px-4">Login</Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">Forgot password?</Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.</p>
                        
                        <Link to='/register'  className="btn btn-warning">Register Now!</Link>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
        )    
    }
}
const mapStateToProps = (state) => {
  return {
    isLogin:state.AuthencationReducer.isLogin
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    login: (data) => {
        dispatch(actions.login(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);