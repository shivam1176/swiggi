import { useState } from "react"
const Header =()=>{
  const [btnNameReact,setBtnNameReact]= useState('login');

    return (
  
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-2x?logoTemplateVersion=1&v=637810055012670000"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li>CART</li>
            <button className="login" onClick={() => setBtnNameReact(btnNameReact === "login" ? "logout" : "login")}>{btnNameReact}</button>
          </ul>  
        </div>
  
      </div>
    )
    
  }
  export default Header ;
  