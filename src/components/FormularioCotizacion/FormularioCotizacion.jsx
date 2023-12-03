import { useState } from "react";
import "./FormularioCotizacion.css";
import Select from "react-select";
import Cotizacion from "../Cotizacion/Cotizacion";

const FormularioCotizacion = () => {
  const autos = [
    {
      value: "fiat",
      label: "Fiat",
      modelos: [
        { value: "uno", label: "Uno", factor: 1 },
        { value: "palio", label: "Palio", factor: 1.1 },
        { value: "cronos", label: "Cronos", factor: 1.2 },
      ],
    },

    {
      value: "ford",
      label: "Ford",
      modelos: [
        { value: "focus", label: "Focus", factor: 1.3 },
        { value: "fusion", label: "Fusion", factor: 1.35 },
        { value: "edge", label: "Edge", factor: 1.4 },
      ],
    },

    {
      value: "renault",
      label: "Renault",
      modelos: [
        { value: "clio", label: "Clio", factor: 1 },
        { value: "kwid", label: "Kwid", factor: 1.05 },
        { value: "sandero", label: "Sandero", factor: 1.2 },
      ],
    },
  ];

  const anios = [
    { value: "2019", label: "2019", factor: 1 },
    { value: "2020", label: "2020", factor: 1.1 },
    { value: "2021", label: "2021", factor: 1.2 },
    { value: "2022", label: "2022", factor: 1.3 },
    { value: "2023", label: "2023", factor: 1.4 },
  ];

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");
  const [cotizacion, setCotizacion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCotizacion(true);
    console.log({ marca, modelo, anio });
  };

  const handleChangeMarca = (selectedOption) => {
    setMarca(selectedOption.value);
  };

  const handleChangeModelo = (selectedOption) => {
    setModelo(selectedOption.value);
  };

  const handleChangeAnio = (selectedOption) => {
    setAnio(selectedOption.value);
  };

  const modelos = autos.find((auto) => auto.value === marca)?.modelos;
  const factorModelo = modelos?.find((auto) => auto.value === modelo)?.factor;
  const factorAnio = anios?.find((auto) => auto.value === anio)?.factor;

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          Marca:
          <Select className="select"
            options={autos}
            onChange={handleChangeMarca}
            autoFocus={true}
          />
        </label>
        <label>
          Modelo:
          <Select className="select" options={modelos} onChange={handleChangeModelo} />
        </label>
        <label>
          Año:
          <Select className="select" options={anios} onChange={handleChangeAnio} />
        </label>
        <button type="submit">Cotizar</button>
      </form>
      {marca && modelo && anio && cotizacion && (
        <Cotizacion
          marca={marca}
          modelo={modelo}
          anio={anio}
          factorModelo={factorModelo}
          factorAnio={factorAnio}
        />
      )}
    </>
  );
};

export default FormularioCotizacion;
