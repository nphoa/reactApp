import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../Actions/index';
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
            <div className='login-page ls-closed'>

           
              <div className="login-box">
              <div className="logo">
                <a href="javascript:void(0);">Admin<b>BSB</b></a>
                <small>Admin BootStrap Based - Material Design</small>
              </div>
              <div className="card">
                <div className="body">
                  <form onSubmit={this.onSubmitForm}>
                    <div className="msg">Sign in to start your session</div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="material-icons">person</i>
                      </span>
                      <div className="form-line">
                        <input type="email" className="form-control" name="email" placeholder="email" onChange={this.onChangeEvent} value={this.state.email} />
                      </div>
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="material-icons">lock</i>
                      </span>
                      <div className="form-line">
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChangeEvent} value={this.state.password} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-8 p-t-5">
                        <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                        <label htmlFor="rememberme">Remember Me</label>
                      </div>
                      <div className="col-xs-4">
                        <button className="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                      </div>
                    </div>
                    <div className="row m-t-15 m-b--20">
                      <div className="col-xs-6">
                        <a href="sign-up.html">Register Now!</a>
                      </div>
                      <div className="col-xs-6 align-right">
                        <a href="forgot-password.html">Forgot Password?</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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