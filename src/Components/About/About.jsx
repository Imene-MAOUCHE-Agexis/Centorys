import React from 'react';
import './About.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <div className="about-img-container">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className='play-icon' />
        </div>
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Le besoin initial</h2>
        <p>Vous voulez agrandir vos espaces de vie de la maison ou de l'appartement, jumelez 2 pieces, jumelez 2 étages, créer une verriere pour plus de lumiere et un mur proteur vous gene! Ou bien un plancher, vous voulez renover votre maison tout en changeant la distribution, alors avec MM ou OM etc… </p>
        <p>L'expert structurel et, plus aucun mur obstacle pour une réhabilitation réussie tout en sérénité</p>
      </div>
    </div>
  )
}

export default About;
