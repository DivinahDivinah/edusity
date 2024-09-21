import React from 'react'
import './About.css'
import videoGraduate from '../../assets/videoGraduate.jpg'
import playIcon from '../../assets/playIcon.jpg'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={videoGraduate} alt="" className='about-img'/>
            <img src={playIcon} alt="" className='play-icon' onClick={()=>
                {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, 
                omnis facere blanditiis ut corrupti 
                doloribus consectetur quibusdam vitae esse commodi accusantium 
                reprehenderit nemo eligendi qui eveniet est a rem! Quia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam eius sed sunt ipsam velit reprehenderit, excepturi ducimus 
                consectetur consequatur, animi natus ratione porro corrupti! 
                Perferendis molestiae minima enim quo dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ab iure excepturi nemo pariatur, perferendis ea officia magnam 
                libero quibusdam quisquam minima aliquid assumenda nobis alias ex. 
                Consectetur reprehenderit assumenda fuga.</p>
        </div>
    </div>
  )
}

export default About