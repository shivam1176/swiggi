import { useState } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import {useSelector} from "react-redux";
const Header =()=>{
  const [btnNameReact,setBtnNameReact]= useState('login');
const onlineStatus = useOnlineStatus;
// Selector 

const cartItems = useSelector((store)=>store.cart.items);
    return (
  
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' alt="logo" src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-2x?logoTemplateVersion=1&v=637810055012670000"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online :{onlineStatus ? "💚":"❌" }</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">CONTACT US</Link></li>
            <li> <Link to="/Cart">CART-({cartItems.length} items)</Link></li>
            <button className="login" onClick={() => setBtnNameReact(btnNameReact === "login" ? "logout" : "login")}>{btnNameReact}</button>
          </ul>  
        </div>
  
      </div>
    )
    
  }
  export default Header ;
  