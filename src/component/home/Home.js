import React from 'react'
import "./home.css"
import SideBar from './sideBar'
import ImageSlider from "./ImageSlider.js"
import Card from "./Card.js"
import { MdCreditCard, MdHeadphones, MdRestore, MdShield, MdShoppingBag } from 'react-icons/md'
import ProductSlider from "./ProductSlider.js"



const Home = () => {

    const product = {
        name: "MacBook Air 265GB ",
        price: "82,000",
        images: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        numOfReviews: "10",
    }
   

    const images = [
        { url: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", title: "mobil" },
        { url: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", title: "girl" },
        { url: "https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", title: "mobil2" }
    ]

    const containerStyle = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };



    return (

        <>
            <div className="container">
                <div className='left'>

                    <SideBar />
                </div>

                <div className='homeSwipe' style={containerStyle}>

                    <ImageSlider images={images} />
                </div>

                <div className='right'>

                    <div className='homeCards'>

                        <Card product={product} />

                        <Card product={product} />
                    </div>

                </div>
            </div>

            <div className='facilityBar'>
                <ul>
                    <li><MdHeadphones/> 24/7 SUPPORT</li>
                    <li> <MdCreditCard/> ACCPECT PAYMENT</li>
                    <li> <MdShield/> SECURED PAYMENT</li>
                    <li> <MdShoppingBag/> FREE SHIPPING</li>
                    <li> <MdRestore/> 30 DAYS RETURN</li>
                
                </ul>
            </div>

            {/* top category  sels */}

            <div className="topCategory">
              <h3>Top category sels</h3>
            
                <ProductSlider />
                    
                
            </div>



        </>
    )
}

export default Home