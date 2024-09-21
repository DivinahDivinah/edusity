import React from 'react'
import './Campus.css'
import graduate9 from '../../assets/graduate9.jpg'
import graduate6 from '../../assets/graduate6.jpg'
import graduate10 from '../../assets/graduate10.jpg'
import celebrationGraduation from '../../assets/celebrationGraduation.jpg'
import arrowright from '../../assets/arrowright.svg'


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={graduate9} alt="" />
            <img src={graduate6} alt="" />
            <img src={graduate10} alt="" />
            <img src={celebrationGraduation} alt="" />
        </div>
        <button className='btn dark-btn'>See More here <img src={arrowright} alt="" /></button>
    </div>
  )
}

export default Campus