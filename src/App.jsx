import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FormularioCotizacion from './components/FormularioCotizacion/FormularioCotizacion'
import Cotizacion from './components/Cotizacion/Cotizacion'
import { Historial } from './components/Historial/Historial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { createContext, useState } from 'react'

//crear contexto
export const CotizacionContext = createContext();

function App() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");

  return (
    <CotizacionContext.Provider value={{marca, setMarca, modelo, setModelo, anio, setAnio}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<FormularioCotizacion />} />
          <Route path='/historial' element={<Historial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CotizacionContext.Provider>
  )
}

export default App
