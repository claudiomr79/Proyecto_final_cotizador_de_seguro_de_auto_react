import React, { useState } from 'react';
import './FormularioCotizacion.css';
import Select from 'react-select'



const FormularioCotizacion = () => {

 const autos = [
    { value: 'fiat', label: 'Fiat' , 
      modelos: [{value: 'uno', label: 'Uno'},
     {value: 'palio', label: 'Palio'},
     {value: 'cronos', label: 'Cronos'}]},

    { value: 'ford', label: 'Ford' , 
      modelos: [{value: 'focus', label: 'Focus'},
     {value: 'fusion', label: 'Fusion'},
     {value: 'edge', label: 'Edge'}]},

    { value: 'renault', label: 'Renault' , 
      modelos: [{value: 'clio', label: 'Clio'},
     {value: 'kwid', label: 'Kwid'},
     {value: 'sandero', label: 'Sandero'}]},
  ]; 
  
  
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado    ' + marca + ' ' + modelo + ' ' + anio);
  };

  const handleChangeMarca = (selectedOption) => {
    console.log(selectedOption.value + ' seleccionado ');
    setMarca(selectedOption.value);
  };
  
  const handleChangeModelo = (selectedOption) => {
    console.log(selectedOption.value + ' seleccionado ');
    setModelo(selectedOption.value);
  };

  const modelos  = autos.find((auto) => auto.value === marca)?.modelos;
  console.log(modelos);
 
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>
        Marca:
        <Select options={autos} onChange={handleChangeMarca} autoFocus={true} />
      </label>
      <hr />
      <label>
        Modelo:
        <Select options={modelos} onChange={handleChangeModelo}  />
      </label>
      <hr />
      <button type="submit">Cotizar</button>
    </form>
  );
};

export default FormularioCotizacion;
