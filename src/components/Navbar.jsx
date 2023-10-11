import { useState } from "react";
import styled from "styled-components"
import Packages from "./Packages";
import { Button } from "./FirstHomeComponent";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleDropDown = () =>{
        setIsDropDownOpen(!isDropDownOpen);
    }

    const handleOnClick = () =>{
        setModalOpen(true);
    }

    const onClose = () =>{
        setModalOpen(false);
    }
  return (
    <>
        <NavBar>
            <div className="logo">
                <h3>Travel</h3>
            </div>
            <ul>
                <li className='home-page-link'><Link to='/'>Home</Link></li>
                <li className='about-page-link'><Link to='/about'>About</Link></li>
                <li onClick={toggleDropDown}>Services 
                    {isDropDownOpen && (
                        <div className={`dropdown ${isDropDownOpen ? 'active' : ''}`}>
                            <span>Honeymoon packages</span>
                            <span>Tours Packages</span>
                            <span>Musical Events</span>
                            <span onClick={handleOnClick}>Build Package</span>
                        </div>
                    )}
                </li>
                <li>Upcoming Packages</li>
            </ul>
            {modalOpen && (<Packages onClose={onClose} modalOpen={modalOpen}/>)}
            <div className="button">
                <Button>Get in Touch</Button>
            </div>
        </NavBar>
    </>
  )
}
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 66px 321px;
    align-items: center;
    .dropdown{
    display: flex;
    width: 160px;
    flex-direction: column;
    background: rgba(243, 243, 243, 0.60);
    backdrop-filter: blur(12px);
    padding: 23px 16px;
    position: absolute;
    border-radius: 8px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    gap: 12px;
    margin-top: 15px;
    visibility: hidden;
    transition: opacity 2s;
    }
    .dropdown.active{
    opacity: 1;
    visibility: visible;
    }
    .dropdown span{
        font-size: 18px;
        font-weight: 400;
        
    }
    ul{
        display: flex;
        list-style: none;
        gap: 50px;
    }
    ul > li{
        font-size: 18px;
        position: relative;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
    }
    ul > li::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: red; 
    transition: width 0.3s ease;
    }
    ul > li:hover::after {
  width: 100%;
}
.home-page-link{
    a{
        color: white;
        text-decoration: none;
    }
}
   .about-page-link{
    a{
        color: white;
        text-decoration: none;
    }
   }
    .logo{
        color: #fff;
        font-size: 31.62px;
        font-weight : 700;
        font-family: Volkhov;
    }
    
`
export default Navbar
