import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,Button,Badge
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart } from "react-icons/fa";


Header.propTypes = {
    
};

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }


function Header(props) {


    return (
        <header className='l-header' id='header' >
            <div className='wrap-nav'>
                <nav className='nav bd-container'>

                    <img className='logo' src='./assets/images/logo.png' ></img>

                    <div className='nav__menu' id='nav-menu'>
                        <ul className='nav-list'>
                            <li className='nav__item'><a className='nav__link' href='#'>Trang chủ</a></li>
                            <li className='nav__item'><a className='nav__link' href='#'>Sản phẩm</a></li>
                            <li className='nav__item'><a className='nav__link' href='#'>Liên hệ</a></li>   
                        </ul>
                    </div>

                    <div className='nav-right' id='nav-menu'>
                        <ul className='nav-list'>
                            <li className='nav__item'><a className='nav-login ' href='#'>Login</a></li>
                            <li className='nav__item'><a className='nav-cart' href='#'>Giỏ hàng<sup><Badge color="light">2</Badge></sup></a></li>
                        </ul>
                        {/* <a className='nav-cart' href='#'><box-icon type='solid' name='cart'></box-icon></a> */}
                        
                    </div>

                </nav>
            </div>
        </header>

    );
}

export default Header;