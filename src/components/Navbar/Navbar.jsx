import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/seguro.png';

const Navbar = () => {
    return (
        <header>
            <div className='logo'>
                <img src={ logo } alt="seguro" id="logo" />
                <h1 className='titulo'>Cotizador de Seguro de Auto</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Cotizar</a></li>
                    <li><a href="#">Historial</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
