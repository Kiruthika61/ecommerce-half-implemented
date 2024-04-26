import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
const Navbar=()=>{

const[menu,setMenu]=useState()
    return(
        <div className="Navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <p>Go&Buy</p>
            </div>
         <ul className="menu">
            <li onClick={()=>{setMenu("shop")}} > <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"? <hr />:<></>}</li>
            <li  onClick={()=>{setMenu("mens")}}  ><Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="mens"? <hr />:<></>}</li>
            <li  onClick={()=>{setMenu("womens")}} ><Link style={{textDecoration:'none'}} to='/womens'>Women </Link>{menu==="womens"? <hr />:<></>}</li>
            <li  onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration:'none'}} to='/kids'>Kids </Link>{menu==="kids"? <hr />:<></>}</li>
         </ul>
      <div className="cartlogo">
        <Link to='/login'><button>Login</button></Link>
        <Link><img src={cart_icon} alt="" /></Link>
        <div className="count">0</div>
      </div>
        </div>
    )
}

export default Navbar