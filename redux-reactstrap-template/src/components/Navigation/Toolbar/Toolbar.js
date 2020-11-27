import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Toolbar.module.css';
import {    
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

const toolbar = (props) => {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Template App</NavbarBrand>          
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/posts" >Posts</Link> 
              </NavItem>

              <NavItem className={classes.toolbar_item} style={ {border:'1px solid red'} }>
                <Link to="/users" >Users</Link>                
              </NavItem>              
             </Nav>      
        </Navbar>        
      </div>
    )
}

export default toolbar;

