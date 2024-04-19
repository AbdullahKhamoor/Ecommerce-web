import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";



const Navbar = () => {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // var a = document.getElementsByID("sidenav");
    // a.style.width = "252px";
    // alert("function is working")
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (

    <div className='nav'>
       <div className="logo1">
      <div className="logo">
        <i class="fa-brands fa-shopware"></i>
      </div>
      </div>
       <div className="hamburger">
      <FaIcons.FaBars onClick={openNav} className='bar' />
      </div>
      <div id="mySidenav" className=' main-link'>
        <div>  <AiIcons.AiOutlineClose onClick={closeNav} className='close' /></div>
        <Link className='link'>NewArivla</Link>
        <Link className='link'>Smart&#160;phone</Link>
        <Link className='link'>Power&#160;Bank&#160;and&#160;Charging</Link>
        <Link className='link'>Gear&#160;&&#160;Devices</Link>
        <Link className='link'>Camera&#160;&&#160;Visual</Link>
        <Link className='link'>Audio</Link>
        <Link className='link'>LifeStyle</Link>
        <Link className='link'>Deals</Link>
      </div>

      <div className="searchbox">
        <input type="text" name='search' placeholder='Search Product' />
      </div>

    </div>

  )
}

export default Navbar
