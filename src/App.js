import React, { useState } from 'react'
import "./app.css"
import { image7, image8, image10, image11, image12, image13, image14, image15, image9, } from './images/export'


const App = () => {

  const images_list = [
    {id:1, src:image10, alt:"firstPic"},
    {is:2, src:image11, alt:"secondPic" },
    {id:3, src:image13, alt:"thirdPic"},
    {id:4, src:image15, alt:"fourthPic"},
    {id:5, src:image7, alt:"fifthPic"},
    {id:6, src:image14, alt:"sixthPic"},
    {id:7, src:image8, alt:"seventhPic"},
    {id:8, src:image12, alt:"eighthPic"},
    {id:9, src:image9, alt:"ninthPic"},
  
  ]

  const counter = 0;
  const [currentImage, setcurrentImage]  = useState(counter);

  const handlNexteClick = () => {
    setcurrentImage(currentImage + 1)
  }

  const handlePreviousClick = () => {
    setcurrentImage(currentImage - 1)
  }

 return (
  
    <div className='body_section'>
       <div className='header_title'> <h1>Image Caroussel With React</h1> </div>

       <div className='image_caroussel_section'>
          <div className='btn_for_previous'>
            <button
            disabled={currentImage === 0}
            onClick={handlePreviousClick}>Previous</button>
          </div>

          <div className='image_display_section'>
      
          <img src={images_list[currentImage].src} alt={images_list[currentImage].src}/>
          </div>

          <div className='btn_for_next'>
            <button
            disabled={currentImage === images_list.length - 1} 
            onClick={handlNexteClick} >Next</button>
          </div>
       </div>
    </div>
  )
}

export default App