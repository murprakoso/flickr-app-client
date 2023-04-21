import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { CodeSlash, Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState('');

  const handleSelect = (selectedKey) => {
    setActive(selectedKey);
  };

  return (
    <>
      <header>
        <Navbar
          className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'
          expand='lg'
        >
          <Container fluid>
            <Navbar.Brand to='/' className='fw-bold'>
              <CodeSlash
                style={{ fontWeight: '500' }}
                className='bi-type-bold'
              />
              {` `} Brand
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' className='border-0' />
            <Navbar.Collapse id='navbarScroll'>
              <Nav
                className='me-auto my-2 my-lg-0'
                style={{ maxHeight: '200px' }}
                navbarScroll
                activeKey={active}
                onSelect={handleSelect}
              >
                <Nav.Link
                  as={Link}
                  to='/'
                  eventKey='home'
                  className={active === 'home' ? 'active' : ''}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to='/pictures'
                  eventKey='pictures'
                  className={active === 'pictures' ? 'active' : ''}
                >
                  Pictures
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to='/about'
                  eventKey='about'
                  className={active === 'about' ? 'active' : ''}
                >
                  About
                </Nav.Link>
              </Nav>
              <Form className='d-flex'>
                <InputGroup>
                  <Form.Control
                    placeholder='Search..'
                    aria-label='Search..'
                    aria-describedby='basic-addon2'
                  />
                  <Button
                    variant='outline-secondary'
                    id='button-addon2'
                    type='submit'
                  >
                    <Search />
                  </Button>
                </InputGroup>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
