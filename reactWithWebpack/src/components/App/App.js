import React, { Component } from 'react';

import Menu from './../Menu/Menu';
import routes from './../../routes';
import { Switch, Route, BrowserRouter as Router ,HashRouter} from 'react-router-dom';
import LayoutComponent from './../../pages/Layout.Component';
class App extends Component {
    render() {
      return(
          <LayoutComponent/>
      )
    //     return (
    //         <HashRouter>
    //             <div>
    //                 <Menu />
    //                 <div className="container">
    //                     <div className="row">
    //                         {this.showContentMenus(routes)}
    //                     </div>
    //                 </div>
    //             </div>
    //         </HashRouter>
    //     );
    // }

    // showContentMenus = (routes) => {
    //     var result = null;
    //     if (routes.length > 0) {
    //         result = routes.map((route, index) => {
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={route.main}
    //                 />
    //             );
    //         });
    //     }
    //    return <Switch>{result}</Switch>;
    }

}

export default App;
