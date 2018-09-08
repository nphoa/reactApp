import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

import routers from '../../router';



class MainComponent extends Component {

  showContentRoute = (routes) =>{
    
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            return (
                <Route
                    key = {index} 
                    path={route.path}
                    exact={route.exact}
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <route.component {...props} routes={route.routes} />
                    )}  
                />
            );
        });
    }
    return result;
  }
  render() {
    
    return(
      <Router>
        <div>
          {this.showContentRoute(routers)}
        </div>
       
      </Router>
   
    )
     
    }

  }


export default MainComponent