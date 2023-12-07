import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/seguro.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className='logo'>
                <img src={ logo } alt="seguro" id="logo" />
                <h1 className='titulo'>Cotizador de Seguro de Auto</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to={`/`}>Inicio </Link>    </li>
                    <li><Link to={`/historial`}>Historial</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
