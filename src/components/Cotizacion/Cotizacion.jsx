import './Cotizacion.css'
function Cotizacion(props) {
  let valorBase = 10000;  
  const calculoSeguro = (props.factorModelo * props.factorAnio * valorBase).toFixed(2); ;  
  return (
    <div id='cotizacion'>
        <h2>Cotización</h2>
        <p>Marca: {props.marca}</p>
        <p>Modelo: {props.modelo}</p>
        <p>Año: {props.anio}</p>
        <p>Factor por modelo: {props.factorModelo}</p>
        <p>Factor por año: {props.factorAnio}</p>
        <p>Seguro a pagar: ${calculoSeguro}</p>
    </div>
  )
}

export default Cotizacion