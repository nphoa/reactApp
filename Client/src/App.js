import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/Layout/main.Component';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

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
  render() {
    return (
     
          <MainComponent/>
     
    
    );
  }
}

export default App;
