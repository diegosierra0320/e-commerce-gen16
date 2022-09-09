import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header'>
        <NavLink to='/'>
            <h1 className='header__logo'>e-commerce</h1>
        </NavLink>
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className='header_item'><NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/login'>
                  <i className="fa-regular fa-user"></i>
                  </NavLink>
                </li>

                <li className='header_item'><NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/purchases'>
                  <i className="fa-solid fa-box-archive"></i>
                  </NavLink>
                </li>

                <li className='header_item'><NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/cart'>
                  <i className="fa-solid fa-cart-shopping"></i>
                  </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
