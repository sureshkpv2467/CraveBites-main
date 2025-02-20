import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';



const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
  const navigate=useNavigate();
    const logout=()=>{
      localStorage.removeItem("token")
      setToken("")
      navigate("/")
    }

  return (
    <div className='navbar'>
       <Link to='/' ><img src={assets.mlogo} alt="" className="log" /></Link>
       <ul className="navbar-menu">
        <Link smooth to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>HOME</Link>
        <HashLink to= "/#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>MENU</HashLink>
        {/* <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a> */}
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>CONTACT US</a>
       </ul>
       <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
<div className="navbar-search-icon">
    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
    <div className={getTotalCartAmount()===0?"":"dot"}>

    </div>
</div>
{!token ? <button onClick={()=>setShowLogin(true)}>sign in</button>
: <div className="navbar-profile">
    <img src={assets.profile_icon} alt="" />
    <ul className='nav-profile-dropdown'>
      <li><img onClick={()=>navigate('/myorders')} src={assets.bag_icon} alt="" /><p onClick={()=>navigate('/myorders')}>Orders</p></li>
      <hr />
      <li onClick={logout}><img src={assets.logout_icon} alt="" /><p onClick={logout}>Logout</p></li>
    </ul>
</div>}
       </div>
    </div>
  )
}

export default Navbar