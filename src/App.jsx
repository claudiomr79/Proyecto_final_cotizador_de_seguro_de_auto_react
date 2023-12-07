import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FormularioCotizacion from './components/FormularioCotizacion/FormularioCotizacion'
import Cotizacion from './components/Cotizacion/Cotizacion'
import { Historial } from './components/Historial/Historial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<FormularioCotizacion />} />
        <Route path='/historial' element={<Historial />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default App
