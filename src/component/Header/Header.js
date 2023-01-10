import React from 'react'
import "./header.css"
import { MdSearch, MdShoppingBag } from "react-icons/md"
import {FaHeart} from "react-icons/fa"


const Header = () => {
    return (
        <>
            <div className="header1">
                <div className="headerItem1">
                    <span><b>welcome to FleetCart store</b> </span>
                </div>
                <div className="headerItem2">
                    <ul>
                        <li><a href="contact.com">Contact</a></li>
                        <li><a href="compare.com">Compare</a></li>
                        <li><a href="language.com">Language</a></li>
                        <li><a href="currency.com">USD</a></li>
                        <li><a href="login.com">Login</a></li>
                    </ul>
                </div>
            </div>


            {/* main header */}

            <div className="navbar">
                <div className="left">
                    <h3>FLEETCART</h3>
                </div>
                <div className="middle">
                    <div>
                        <input type="search" placeholder='Search item' /><MdSearch />

                    </div>
                </div>
                <div className="right">
                   

                    <div>
                       <FaHeart/> <span>favorite</span> </div>
                  
                     <div>   <MdShoppingBag /><span>$0.00</span>
                    
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header