import React, { useState } from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const ImageSlider = ({images}) => {

    const [currentIndex, setCurrentUser] = useState(0)

    const sliderStyle={
        height:"55vh",
        width:"100%",
        position:"relative",
        marginTop:"6vmax",
       
    }
    const sideStyle={
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${images[currentIndex].url})`,
    }

    const leftArrowStyles={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        left:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer",


    }
    const rightArrowStyles={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer",
        

    }
    const dotsContainer ={
        display:"flex",
        justifyContent:"center",

    }

    const dotStyles ={
        margin :"0 3px",
        cursor:"pointer",
        fontSize:"20px"
    }
    const goToPrevious =()=>{
        const isFirstSlide = currentIndex===0
        const newIndex = isFirstSlide? images.length -1 : currentIndex - 1
        setCurrentUser(newIndex)
    }

    const goToNext = () =>{

        const isLastSlide = currentIndex === images.length -1 
        const newIndex =isLastSlide ? 0 : currentIndex +1 
        setCurrentUser(newIndex)
    }

  return (
    <div style={sliderStyle}>
        <div style={leftArrowStyles} onClick={goToPrevious}>  <MdArrowBack/> </div>
        <div style={rightArrowStyles} onClick={goToNext}> <MdArrowForward/> </div>
        <div style={sideStyle}></div>
        <div style={dotsContainer}>{images.map((image,imageIndex)=>(
            <div style={dotStyles} key={imageIndex}>  0 </div>
        ))}</div>
    </div>
  )
}

export default ImageSlider