/* eslint-disable react/prop-types */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import assets from '../assets/assets'

function Header({setShowLogin}) {
  return (
    <Navbar expand="lg" className="">
      <Container fluid className='py-3'>
        <Navbar.Brand href="#" >
        <a href="/" className="inline-flex items-center text-2xl font-bold md:text-3xl mx-4 " aria-label="logo">
        <span className="text-slate-800 title1">Yum</span>
        <span className="text-amber-500 title2">EASE</span>
       </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navTabs text-slate-900 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='hover:text-yellow-600 hover:underline '>home</Nav.Link>
            <Nav.Link href="#action2" className='hover:text-yellow-600 hover:underline '>menu</Nav.Link>
            <Nav.Link href="#action2" className='hover:text-yellow-600 hover:underline '>contact-us</Nav.Link>
          </Nav>
          <Nav
            className="ml-auto mr-4 my-2 my-lg-0  text-slate-900"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2" className='mx-3'><img src={assets.search_icon} alt="" /></Nav.Link>
            <Nav.Link href="#action2" className='mx-3'><img src={assets.basket_icon} alt="" /></Nav.Link>
            <Nav.Link href="#action2" onClick={()=>setShowLogin(true)} className='border-solid border-2 border-slate-800 rounded-2xl px-3 mx-3 hover:bg-yellow-300'>sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;