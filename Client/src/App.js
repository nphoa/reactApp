import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/Layout/main.Component';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import FlipCard from 'react-flipcard-2';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isFlipped: false
    }
  }
  showBack(){
    this.setState({
      isFlipped: true
    });
  }
 
  showFront(){
    this.setState({
      isFlipped: false
    });
  }
 
  handleOnFlip(flipped) {
    if (flipped) {
      console.log(123);
    }
  }
 
 
 
  
render() {
    return (
     <div>
        
       
              <FlipCard
          disabled={true}
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip.bind(this)}
        >
          <div>
            <div>Front</div>
            <button type="button" onClick={this.showBack.bind(this)}>Show back</button>
            <div><small>(manual flip)</small></div>
          </div>
          <div>
            <div>Back</div>
            <button type="button" ref="backButton" onClick={this.showFront.bind(this)}>Show front</button>
          </div>
        </FlipCard>

     </div>
          // <MainComponent/>
     
    
    );
  }
}

export default App;
