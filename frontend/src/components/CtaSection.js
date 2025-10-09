import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CtaSection.css';

const CtaSection = () => (
  <section className="cta-section">
    <img 
      src="https://res.cloudinary.com/diyd6flkf/image/upload/v1760021215/cta-imagen_chfegd.png"
      alt="Equipo de expertos trabajando" 
      className="cta-image" 
    />
    <div className="cta-box">
      <h2 className="cta-title">
        Deja la contabilidad en manos expertas y enfócate en hacer crecer tu negocio.
      </h2>
      <Link to="/#contacto-form" className="cta-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
  </section>
);

export default CtaSection;