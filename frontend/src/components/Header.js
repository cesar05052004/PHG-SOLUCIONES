import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo-phg-blanco.png'; // Asegúrate de tener tu logo aquí

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo de PHG Soluciones" className="logo-image" />
        </Link>
        <nav className="main-nav">
          <Link to="/#servicios">Servicios</Link>
          <Link to="/#nosotros">Nosotros</Link>
          <Link to="/#equipo">Equipo</Link>
          <Link to="/#contacto-form">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
