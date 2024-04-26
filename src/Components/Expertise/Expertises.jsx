import React from 'react'
import './Expertises.css'
import domaine_1 from '../../assets/domaine_1.jpg'
import domaine_2 from '../../assets/domaine_2.jpg'
import domaine_3 from '../../assets/domaine_3.jpg'
import domaine_4 from '../../assets/domaine_4.jpg'
import domaine_5 from '../../assets/domaine_5.jpg'
import domaine_6 from '../../assets/domaine_6.jpg'
import white_arrow from '../../assets/white-arrow.png'
const Expertises = () => {
  return (
    <div className='expertises'>
        <div className="domaine">
            <img src={domaine_1} alt="" />
            <img src={domaine_2} alt="" />
            <img src={domaine_3} alt="" />
            <img src={domaine_4} alt="" />
            <img src={domaine_5} alt="" />
            <img src={domaine_6} alt="" />
        </div>
        <button className='btn dark-btn'>En savoir plus ici <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Expertises
