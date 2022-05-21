import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    {
      url: './i1.jpg',
      caption: 'Slide 1'
    },
    {
      url: './i2.jpg',
      caption: 'Slide 2'
    },
    {
      url: './i3.jpg',
      caption: 'Slide 3'
    },
  ];
  
  
  
const Slideshow = () => {
    return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
              
 )
};

export default Slideshow;
