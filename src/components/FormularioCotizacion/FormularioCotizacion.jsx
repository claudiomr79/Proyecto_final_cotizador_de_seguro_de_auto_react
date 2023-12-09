import { useContext, useState , useEffect} from "react";
import "./FormularioCotizacion.css";
import Select from "react-select";
import Cotizacion from "../Cotizacion/Cotizacion";
import { CotizacionContext } from "../../App";

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
//usar el contexto
  const { marca, setMarca, modelo, setModelo, anio, setAnio } = useContext(CotizacionContext);
  const [cotizacion, setCotizacion] = useState(false);
  const [valorSeleccionadoMarca, setValorSeleccionadoMarca] = useState(null);
  const [valorSeleccionadoModelo, setValorSeleccionadoModelo] = useState(null);
  const [valorSeleccionadoAnio, setValorSeleccionadoAnio] = useState(null);
  const [mostrarCotizacion, setmostrarCotizacion] = useState(false);

  useEffect(() => {
    if (cotizacion && marca && modelo && anio) {
      setmostrarCotizacion(true);
    }
    //para el caso que vuleve de historial y hubiese quedado un valor en el formulario
    if ((marca || modelo || anio) && (!cotizacion)) {
      setMarca("");
      setModelo("");
      setAnio("");
      
    }

  }, [cotizacion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!marca || !modelo || !anio) {
      alert("complete todos los campos");
      return;
    }
    setCotizacion(true);
    setmostrarCotizacion(false);
    setValorSeleccionadoMarca(null);
    setValorSeleccionadoModelo(null);
    setValorSeleccionadoAnio(null);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setMarca("");
    setModelo("");
    setAnio("");
    setCotizacion(false);
    setmostrarCotizacion(false);
    setValorSeleccionadoMarca(null);
    setValorSeleccionadoModelo(null);
    setValorSeleccionadoAnio(null);
  };
  const handleChangeMarca = (selectedOption) => {
    setMarca(selectedOption.value);
    setValorSeleccionadoMarca(selectedOption);
  };

  const handleChangeModelo = (selectedOption) => {
    setModelo(selectedOption.value);
    setValorSeleccionadoModelo(selectedOption);
  };

  const handleChangeAnio = (selectedOption) => {
    setAnio(selectedOption.value);
    setValorSeleccionadoAnio(selectedOption);
  };

  const modelos = autos.find((auto) => auto.value === marca)?.modelos;
  const factorModelo = modelos?.find((auto) => auto.value === modelo)?.factor;
  const factorAnio = anios?.find((auto) => auto.value === anio)?.factor;

  return (
    <>
      <main id="formularioCotizacion">
        <div>
        <form className="formulario">
          <label>
            Marca:
            <Select className="select"
              options={autos}
              onChange={handleChangeMarca}
              autoFocus={true}
              value={valorSeleccionadoMarca}
            />
          </label>
          <label>
            Modelo:
            {marca ? <Select className="select" options={modelos} onChange={handleChangeModelo} value={valorSeleccionadoModelo} /> :
              <Select className="select" isDisabled onChange={handleChangeModelo} value={null} />}
          </label>
          <label>
            Año:
            {modelo ? <Select className="select" options={anios} onChange={handleChangeAnio} value={valorSeleccionadoAnio} /> :
              <Select className="select" isDisabled onChange={handleChangeAnio} value={null} />}
          </label>
          <div id="containerBotones">
            <button type="submit" onClick={handleSubmit}>Cotizar</button>
            <button type="reset" onClick={handleReset}>Limpiar</button>
          </div>
        </form>
        </div>
        {mostrarCotizacion && (
          <Cotizacion
            factorModelo={factorModelo}
            factorAnio={factorAnio}
          />
        )}
      </main>
    </>
  );
};

export default FormularioCotizacion;
