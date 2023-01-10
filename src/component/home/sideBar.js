import React from 'react'
import "./sidebar.css"
import {MdExpandMore} from "react-icons/md"


const SideBar = () => {
    return (
        <>

            <div className='sidebar'>

               <h2>Browse Categories</h2>

                <a href='/' >
                    <p>
                        <MdExpandMore />Electronic
                    </p>
                </a>
                <a href='/'>
                   <p> <MdExpandMore/> Man's Fashions</p>
                </a>
                <a href="/">
                    <p>
                        <MdExpandMore />Consumer Electronics
                    </p>
                </a>

                <a href="/">
                    <p>
                        <MdExpandMore /> Watch
                    </p>
                </a>
                <a href="/">
                    <p>
                        <MdExpandMore /> Home Appliances
                    </p>
                </a>
                <a href="/">
                    <p>
                        <MdExpandMore /> BackPacks
                    </p>
                </a>
                <a href="/">
                    <p>
                        <MdExpandMore /> Woman's Fashions
                    </p>
                </a>


            </div>
























            {/* <div className='sideBar'>


                <div>
                    <h2>Browse Categories</h2>
                </div>
                <div>
                    <ul>
                        <li><a href="/">Electronic</a> </li>
                        <li><a href="/">Man's Fashion</a></li>
                        <li><a href="/">Consumer Electronics</a> </li>
                        <li><a href="/">Watch</a> </li>
                        <li><a href="/">Home Appliances</a></li>
                        <li><a href="/">BackPacks</a></li>
                        <li><a href="/">Woman's Fashions</a></li>
                    </ul>
                </div>


            </div> */}
        </>
    )
}

export default SideBar