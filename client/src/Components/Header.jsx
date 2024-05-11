/* eslint-disable react/prop-types */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import assets from '../assets/assets'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

function Header({ setShowLogin }) {
  const { getTotalAmount } = useContext(StoreContext)

  return (
    <Navbar expand="lg" className="">
      <Container fluid className='py-3'>
        <Navbar.Brand href="#" >
          <Link to="/" className="inline-flex items-center text-2xl font-bold md:text-3xl mx-4 " aria-label="logo">
            <span className="text-slate-800 title1">Yum</span>
            <span className="text-amber-500 title2">EASE</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto gap-3 my-2 my-lg-0 navTabs text-slate-900 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='hover:text-yellow-600 hover:underline '>home</Link>
            <Link to="" className='hover:text-yellow-600 hover:underline '>menu</Link>
            <Link to="#action2" className='hover:text-yellow-600 hover:underline '>contact-us</Link>
          </Nav>
          <Nav
            className="ml-auto mr-4 my-2 my-lg-0  text-slate-900"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='mx-3 my-2'><img src={assets.search_icon} alt="" /></Link>
            <Link to='/cart' className='mx-3'>
              {getTotalAmount() === 0 ? "" : <div className='h-2 w-2 bg-red-700 rounded-full justify-end items-end'></div>
              }
              <img src={assets.basket_icon} alt="" />
            </Link>
            <Link onClick={() => setShowLogin(true)} className='border-solid border-2 border-slate-800 rounded-2xl px-3 py-2 mx-3 hover:bg-yellow-300'>sign in</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;