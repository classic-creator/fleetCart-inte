import React from 'react'
import Card from './Card'
import "./productSlider.css"

const ProductSlider = () => {
    const product = {
        name: "MacBook Air 265GB ",
        price: "82,000",
        images: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        numOfReviews: "10",
    }
    let box = document.querySelector('.productContainer');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (


        <>
            <div className='productSlider'>
                <button onClick={btnpressprev} className='pre-btn'><p>&lt;</p></button>
                <button onClick={btnpressnext} className='next-btn'><p>&gt;</p></button>
           
            <div className="productContainer">
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
                <Card product={product} />
            </div>
            </div>
        </>
    )
}

export default ProductSlider