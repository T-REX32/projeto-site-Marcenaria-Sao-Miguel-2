import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Servicos from './components/Servicos.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <Sobre />
      <Contato />
      <Footer />
    </>
  )
}

export default App