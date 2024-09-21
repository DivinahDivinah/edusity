import React from 'react'
import './Hero.css'
import arrowright from '../../assets/arrowright.svg'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure Better Education for a Better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students
                with the knowledge, skills and experiences needed to excel in 
                the dynamic field of education
            </p>
            <button className="btn">Explore more <img src={arrowright} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero