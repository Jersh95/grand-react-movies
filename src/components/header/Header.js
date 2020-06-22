import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import './header.scss';
import CatalogContainer from '../catalog/CatalogContainer';

export default class Header extends React.Component {

  state = {

  };

  render() {
    return (
      <div id='menu-router'>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark" expand='lg'>
            <Navbar.Brand>
              <Link to='/'>Grand React Movies</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse>
              <Nav id='header-nav' className='mr-auto'>
                <Link to='/shop'>Shop</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div>
            <Switch>
              <Route exact path='/shop'>
                <CatalogContainer/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}