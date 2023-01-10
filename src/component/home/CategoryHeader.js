import React from 'react'
import "./categoryHeader.css"
import {FaBars} from "react-icons/fa"

const CategoryHeader = () => {
    return (
        <>
            <div className="categoryHeader">
                <div className="category">
                    <p>ALL CATEGORY</p> <FaBars/>
                </div>
                <div className="categoryItem">
                    <ul>
                        <li>Shope</li>
                        <li>Brand</li>
                        <li>About Us</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Buy Theme!</li>
                    </ul>
                </div>
                <div className="price"><p>Free Shopping Over $100+</p></div>
            </div>
        </>
    )
}

export default CategoryHeader