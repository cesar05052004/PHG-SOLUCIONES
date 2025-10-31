import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuRef = useRef(null);
  const botonRef = useRef(null);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !botonRef.current.contains(event.target)
      ) {
        setMenuAbierto(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section
      className="hero-section"
      style={{ background: "url('https://res.cloudinary.com/diyd6flkf/image/upload/v1760021191/hero-bg_cgs5qy.jpg') center/cover no-repeat" }}
    >
      {/* --- Botón de Menú Hamburguesa --- */}
      <button ref={botonRef} className="hamburger-btn" onClick={toggleMenu} aria-label="Abrir menú">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* --- Menú Lateral Desplegable --- */}
      <div ref={menuRef} className={`side-menu ${menuAbierto ? 'open' : ''}`}>
        <Link to="/mision" className="side-menu-link" onClick={toggleMenu}>Misión</Link>
        <Link to="/vision" className="side-menu-link" onClick={toggleMenu}>Visión</Link>
        <Link to="/blog" className="side-menu-link" onClick={toggleMenu}>Blog</Link>
      </div>

      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-subtitle">PHG SOLUCIONES CONTABLES</h2>
          <h1 className="hero-title">SERVICIO CONTABLE DE ALTA PRECISIÓN</h1>
          <p className="hero-desc">Impulsamos tu crecimiento con asesoría financiera estratégica y soporte cercano.</p>
          <Link to="/#contacto-form" className="hero-btn">
            ¡SOLICITA UNA ASESORÍA AHORA!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
