import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Compagnes from './Components/Compagnes/Compagnes'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Expertises from './Components/Expertise/Expertises'
import Enjeux from './Components/Enjeux/Enjeux'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="container">
      <Title subTitle='Nos Compagnes Ciblées' title='Ce que nous offrons'/>
      <Compagnes/>
      <About/>
      <Title subTitle='Nos Expertises' title='Le potentiel du numérique'/>
      <Expertises/>
      <Title subTitle='Enjeux et Finalités' title='Diversité et Innovation dans les Projets IT'/>
      <Enjeux/>
      </div>
    </div>
  )
}

export default App
