import React, { Component } from 'react';
import MenuComponent from './menu.Component';
import {connect} from 'react-redux';
import {Redirect,Switch,Route,Link} from 'react-router-dom';
import { Container } from 'reactstrap';
import KeywordComponent from '../English/Keywords.Component';
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';

// sidebar nav config
import navigation from '../../_nav';
// routes config
//import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

class LayoutComponent extends Component{
    componentWillMount(){
      console.log(this.props);
    }
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
    render(){
        if(!this.props.isLogin){
            return (
                <Redirect to ="/login"/>
            )
        }
        return(
            <div className="app">
            <AppHeader fixed>
              <DefaultHeader />
            </AppHeader>
            <div className="app-body">
              <AppSidebar fixed display="lg">
                <AppSidebarHeader />
                <AppSidebarForm />
               
                <AppSidebarNav navConfig={navigation} {...this.props} />
                <AppSidebarFooter />
                <AppSidebarMinimizer />
              </AppSidebar>
              <main className="main">
                <AppBreadcrumb appRoutes={this.props.routes}/>
                <Container fluid>
                {this.showContentRoute(this.props.routes)}
                </Container>
              </main>
              <AppAside fixed hidden>
                <DefaultAside />
              </AppAside>
            </div>
            <AppFooter>
              <DefaultFooter />
            </AppFooter>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      isLogin:state.AuthencationReducer.isLogin
    }
  }
  
export default connect(mapStateToProps)(LayoutComponent);

