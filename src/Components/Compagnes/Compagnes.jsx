import React from 'react'
import './Compagnes.css'
import compagne_1 from '../../assets/compagne_1.jpg'
import compagne_2 from '../../assets/compagne_2.jpg'
import compagne_3 from '../../assets/compagne_3.jpg'
import compagne_icon_1 from '../../assets/compagne_icon_1.png'
import compagne_icon_2 from '../../assets/compagne_icon_2.png'
import compagne_icon_3 from '../../assets/compagne_icon_3.png'
const Compagnes = () => {
  return (
    <div className='compagnes'>
      <div className="compagne">
        <img src={compagne_1} alt="" />
        <div className="caption">
            <img src={compagne_icon_1} alt="" />
            <p>Campagnes pour infrastructure it multicible</p>
        </div>
      </div>
      <div className="compagne">
        <img src={compagne_2} alt="" />
        <div className="caption">
            <img src={compagne_icon_2} alt="" />
            <p>Campagnes pour SI et digitalisation et automatisation</p>
        </div>
      </div>
     
      <div className="compagne">
        <img src={compagne_3} alt="" />
        <div className="caption">
            <img src={compagne_icon_3} alt="" />
            <p>Campagnes pour IA et Data et robotisation multicible </p>
        </div>
      </div>
    </div>
  )
}

export default Compagnes
