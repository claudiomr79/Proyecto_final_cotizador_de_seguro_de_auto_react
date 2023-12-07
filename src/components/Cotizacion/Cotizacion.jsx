import { useEffect, useContext } from 'react'
import './Cotizacion.css'
import { CotizacionContext } from "../../App";


function Cotizacion(props) {
  const { marca, modelo, anio } = useContext(CotizacionContext);

  let valorBase = 10000;  
  const calculoSeguro = (props.factorModelo * props.factorAnio * valorBase).toFixed(2); 
  
  useEffect(() => {
    console.log('se renderizo el componente Cotizacion useEffect')
    const historalArray = JSON.parse(localStorage.getItem('historial')) || [];
    console.log('historial',historalArray);
    const nuevaCotizacion =  [marca, modelo, calculoSeguro];
    historalArray.push(nuevaCotizacion);
    localStorage.setItem('historial', JSON.stringify(historalArray));
  }), [marca, modelo, calculoSeguro]
  return (
    <div id='cotizacion'>
        <h2 style={{fontSize:'1.6rem'}}>Cotización</h2>
        <p>Marca: {marca}</p>
        <p>Modelo: {modelo}</p>
        <p>Año: {anio}</p>
        <h3><span style={{color: 'white', fontSize:'1.6rem'}}>Seguro a pagar: ${calculoSeguro}</span></h3>
    </div>
  )
}

export default Cotizacion