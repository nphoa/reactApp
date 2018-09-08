import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginComponent from './Components/Login.Component';
import LayoutComponent from './Components/Layout/layout.Component';
import DashboardComponent from './Components/Dashboard.Component';
import KeywordContainer from './Containers/Keyword.Container';
import Keyword from './Components/English/Keyword.Component';
const routers = [
    {
        path:'/login',
        exact:true,
        component:LoginComponent
    },
    {
        path:'/',
        component:LayoutComponent,
        routes:[
            {
                path:'/dashboard',
                exact:true,
                component:DashboardComponent
            },
            {
                path:'/keywords',
                exact:true,
                component:KeywordContainer
            },
            {
                path:'/addKeyword',
                exact:true,
                component:Keyword
            }
        ]
    }
]

export default routers