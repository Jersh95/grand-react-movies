import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Header extends React.Component {

  state = {

  };

  render() {
    return (
      <div>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav id='header-nav' className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about-me'>About Me</Nav.Link>
              <NavDropdown title='Projects' id='projects-dropdown'>
                <NavDropdown.Item href='https://github.com/Jersh95/Expenses' target='blank' className='header__nav__dropdown__item'>Expense Tracker</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}