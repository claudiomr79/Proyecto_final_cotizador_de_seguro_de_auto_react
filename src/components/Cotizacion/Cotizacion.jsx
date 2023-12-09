import { useEffect, useContext } from 'react'
import './Cotizacion.css'
import { CotizacionContext } from "../../App";


function Cotizacion(props) {
  const { marca, modelo, anio } = useContext(CotizacionContext);

  let valorBase = 10000;  
  const calculoSeguro = (props.factorModelo * props.factorAnio * valorBase).toFixed(2); 
  
  useEffect(() => {
    const historalArray = JSON.parse(localStorage.getItem('historial')) || [];
    const nuevaCotizacion =  [ marca, modelo, calculoSeguro ];
    historalArray.push(nuevaCotizacion);
    localStorage.setItem('historial', JSON.stringify(historalArray));
  }), [anio]
  return (
    <div id='cotizacion'>
        <h2><span style={{color: 'white', fontSize:'1.6rem'}}>Seguro a pagar: ${calculoSeguro}</span></h2>
    </div>
  )
}

export default Cotizacion