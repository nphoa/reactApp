import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginComponent from './Components/Login.Component';
import LayoutComponent from './Components/Layout/layout.Component';
import DashboardComponent from './Components/Dashboard.Component';
import KeywordsContainer from './Containers/Keywords.Container';
import Keyword from './Components/English/Keyword.Component';
import RegisterComponent from './Components/Register.Component';
const routers = [
    {
        path:'/login',
        exact:true,
        component:LoginComponent
    },
    {
        path:'/register',
        exact:true,
        component:RegisterComponent
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
                component:KeywordsContainer
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