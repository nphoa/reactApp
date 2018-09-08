import React, { Component } from 'react';

class MenuComponent extends Component{
    render(){
        return(
            <div className="menu">
            <ul className="list">
                <li className="header">MAIN NAVIGATION</li>
                <li className="active">
                    <a href="">
                    <i className="material-icons">home</i>
                        <span>Home</span>
                    </a>
                   
                </li>
                <li>
                <a href="">
                <i className="material-icons">text_fields</i>
                        <span>Profile</span>
                    </a>
                   
                </li>
                <li>
                <a href="">
                <i className="material-icons">text_fields</i>
                        <span>Product</span>
                    </a>
                    
                </li>
              
              
               
                <li>
                    <a href="javascript:void(0);" className="menu-toggle">
                        <i className="material-icons">view_list</i>
                        <span>Tables</span>
                    </a>
                    <ul className="ml-menu">
                        <li>
                            <a href="pages/tables/normal-tables.html">Normal Tables</a>
                        </li>
                        <li>
                            <a href="pages/tables/jquery-datatable.html">Jquery Datatables</a>
                        </li>
                        <li>
                            <a href="pages/tables/editable-table.html">Editable Tables</a>
                        </li>
                    </ul>
                </li>
          
        
            </ul>
</div>
        )
    }
}

export default MenuComponent;