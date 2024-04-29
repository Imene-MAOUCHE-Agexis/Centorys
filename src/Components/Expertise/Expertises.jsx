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
            <img src={domaine_1} alt="Expertise en Infrastructures IT (réseaux informatique télécom internet, Wan Man Lan, Wifi 2g 3g 4g 5g Satellitaire, Cablé, transmission, protocoles, technologies, IoT IIoT,...)" />
            <img src={domaine_2} alt="Expertises en Data ( Collecte, Stockage, Sauvegarde, Sécurité, Disponibilité,…)" />
            <img src={domaine_3} alt="Expertises en Traitement de Données et Big Data (Analyse, Prédictions, Détection,…)" />
            <img src={domaine_4} alt="Expertises en Développement et Programmation (Informatique et électronique, robotique multilanguage et multienvironnement)" />
            <img src={domaine_5} alt="Expertises en Développement de IA (Spécifique et Générale, Deep Learning, Machine Learning,Robotique...)" />
            <img src={domaine_6} alt="Expertises en Gestion de Projet IT (Stratégique, Fonctionnelle, Technique et Opérationnelle)" />
        </div>
        <button className='btn dark-btn'>En savoir plus ici <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Expertises
