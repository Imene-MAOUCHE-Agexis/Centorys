import React from 'react'
import './Home.css'
import fleche from '../../assets/fleche.png'
const Home = () => {
  return (
    <div className='home container'>
      <div className='home-text'>
      <h1>Centorys : Votre Partenaire Numérique de Confiance</h1>
      <p>Centorys est votre partenaire de confiance pour relever les défis de la transformation numérique.
         Avec une expertise approfondie dans les technologies de pointe et une approche personnalisée, 
         nous sommes là pour vous accompagner à chaque étape de votre parcours numérique. 
         De l'audit initial à la mise en œuvre complète de projets, nous vous offrons les solutions dont
          vous avez besoin pour réussir dans un monde en constante évolution.
      </p>
      <button className='btn'>Explorez plus ! <img src={fleche} 
      alt="" /></button>
    </div>
    </div>
  )
}

export default Home
