import React from 'react'
import './Enjeux.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

const Enjeux = () => {
  return (
    <div className='enjeux'>
        <img src={next_icon} alt="" className='next-btn' />
        <img src={back_icon} alt="" className='back-btn' />
        <div className="slider"></div>
    </div>
  )
}

export default Enjeux
