import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Compagnes from './Components/Compagnes/Compagnes'
import Title from './Components/Title/Title'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="container">
        <Title/>
      <Compagnes/>
      </div>
    </div>
  )
}

export default App
