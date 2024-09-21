import React, { useRef } from 'react'
import './Testimonials.css'
import arrowleft from '../../assets/arrowleft.svg'
import arrowright from '../../assets/arrowright.svg'
import graduate7 from '../../assets/graduate7.jpg'
import graduate4 from '../../assets/graduate4.jpg'
import graduate8 from '../../assets/graduate8.jpg'
import graduate5 from '../../assets/graduate5.jpg'

const Testimonials = () => {

    
        
        const slider = useRef();
        let tx = 0;

    const slideForward = () => {
            if(tx > -50){
                tx -=25;
            }
            slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = () => {
        if(tx > 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={arrowright} alt="" className='next-btn' onClick={slideForward}/>
        <img src={arrowleft} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={graduate4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto 
                        nam dolorum magni aperiam, ullam quas quisquam doloremque ad necessitatibus 
                        laborum libero numquam sit explicabo ut. Voluptatibus dolore dignissimos quaerat!
                      </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={graduate7} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto 
                        nam dolorum magni aperiam, ullam quas quisquam doloremque ad necessitatibus 
                        laborum libero numquam sit explicabo ut. Voluptatibus dolore dignissimos quaerat!
                      </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={graduate8} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto 
                        nam dolorum magni aperiam, ullam quas quisquam doloremque ad necessitatibus 
                        laborum libero numquam sit explicabo ut. Voluptatibus dolore dignissimos quaerat!
                      </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={graduate5} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity USA</span>
                            </div>
                        </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto 
                        nam dolorum magni aperiam, ullam quas quisquam doloremque ad necessitatibus 
                        laborum libero numquam sit explicabo ut. Voluptatibus dolore dignissimos quaerat!
                      </p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Testimonials