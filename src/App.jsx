import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Compagnes from './Components/Compagnes/Compagnes'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Expertises from './Components/Expertise/Expertises'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="container">
        <Title subTitle='Nos compagnes ciblées' title='Ce que nous offrons'/>
      <Compagnes/>
      <About/>
      <Title subTitle='Nos expertises' title='Le potentiel du numérique'/>
      <Expertises/>
      </div>
    </div>
  )
}

export default App
