import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section
    className="hero-section"
    style={{ background: "url('https://res.cloudinary.com/diyd6flkf/image/upload/v1760021191/hero-bg_cgs5qy.jpg') center/cover no-repeat" }}
  >
    <div className="hero-overlay"> {/* Esta capa ahora tiene estilos */}
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

export default Hero;
