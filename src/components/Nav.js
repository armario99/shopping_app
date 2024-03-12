import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import './Nav.css';
import { Link } from 'react-router-dom';
/*https://react-icons.github.io/react-icons/*/
export default function Nav() {
  return (
    <nav className='nav_body' >
        <Link to="/" className='Shop_text' ><p>Shop</p></Link> 
        <CiShoppingCart className='cart_icon' />
        <Link to="/login" className="my_page">
          <RiAccountCircleFill className="icon" />
        </Link>
        <IoIosLogOut className='Logout' />
    </nav>
  )
}
