import React, {useState} from 'react'
import '../Assets/NavBar.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { ImLinkedin } from 'react-icons/im'
import {BsChatSquareDotsFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const NavBar = ({handleGoToTop, handleWhatWeDo}) => {
    /* Used to set up the modal of the navbar */
    const [hamburger, setHamburger] = useState(false);
    return (
      <div className="overall-navbar">
        <div className="nav-bar">
          {/* Regular Nav */}
            <div onClick={handleGoToTop} className="nav-left">
                <img className="logo" alt="logo" src="images/Nav-Logo.png" width="200"/>
            </div> 
            <div className="nav-right">
                <BsChatSquareDotsFill className="icons mg-right"/>
                <ImLinkedin className="icons mg-right"/>
                <GrInstagram className="icons mg-right"/>
                <FaFacebookSquare className="icons fb mg-ham"/>
                <div
                    id="nav-ham"
                    className={`${hamburger && "Diam"}`}
                    onClick={() => setHamburger(!hamburger)}>
                    <div className="ham top"></div>
                    <div className="ham middle"></div>
                    <div className="ham bottom"></div>
                </div>
            </div>
            
          {/* Hidden hamburger menu nav */}
          <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
        <nav className="hiddenNavSearch-user">
          <ul className="hamburger-menu">
            <li className="hamburger-menu-item">
              <NavLink to="/login" className="hm-hover1">
                Sign In
              </NavLink>
            </li>
            <li className="hamburger-menu-item">
              <NavLink to="/courses" className="hm-hover2">
                Courses
              </NavLink>
            </li>
            <li className="hamburger-menu-item hm-hover3">
              <div onClick={handleGoToTop} className="hm-hover3">
                Who We Are
              </div>
            </li>
            <li className="hamburger-menu-item hm-hover4">
              <div onClick={handleWhatWeDo} className="hm-hover4">
                What We Do
              </div>
            </li>
          </ul>
        </nav>
        </div>
        </div>
        </div>
    )
}

export default NavBar
