import React from 'react'
import './Programs.css'
import graduate1 from '../../assets/graduate1.jpg'
import graduate2 from '../../assets/graduate2.jpg'
import graduate3 from '../../assets/graduate3.jpg'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={graduate1} alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={graduate2} alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={graduate3} alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs