import { useEffect } from 'react'
import './Cotizacion.css'
function Cotizacion(props) {

  let valorBase = 10000;  
  const calculoSeguro = (props.factorModelo * props.factorAnio * valorBase).toFixed(2); 
  
  useEffect(() => {
    console.log('se renderizo el componente Cotizacion useEffect')
    const historalArray = JSON.parse(localStorage.getItem('historial')) || [];
    console.log('historial',historalArray);
    const nuevaCotizacion =  [props.marca, props.modelo, calculoSeguro];
    historalArray.push(nuevaCotizacion);
    localStorage.setItem('historial', JSON.stringify(historalArray));
  }), [props.marca, props.modelo, calculoSeguro]
  return (
    <div id='cotizacion'>
        <h2>Cotización</h2>
        <p>Marca: {props.marca}</p>
        <p>Modelo: {props.modelo}</p>
        <p>Año: {props.anio}</p>
        <h3>Seguro a pagar: ${calculoSeguro}</h3>
    </div>
  )
}

export default Cotizacion