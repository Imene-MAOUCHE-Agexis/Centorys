import React from 'react'
import './Home.css'
import fleche from '../../assets/fleche.png'
const Home = () => {
  return (
    <div className='home container'>
      <div className='home-text'>
      <h1>Campagnes pour infrastructure it multicible</h1>
      <p>vous voulez agrandir vos espaces de vie de la maison ou de l'appartement,jumelez 2 pieces, 
          jumelez 2 étages, créer une verriere pour plus de lumiere et un mur proteur vous gene! Ou bien un plancher,
      <br />vous voulez renover votre maison tout en changeant la distribution, alors avec MM ou OM etc… l'expert structurel et, plus aucun mur obstacle pour une réhabilitation réussie tout en sérénité
      </p>
      <button className='btn'>Explorez plus ! <img src={fleche} 
      alt="" /></button>
    </div>
    </div>
  )
}

export default Home
