import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Paginas.css'; // Importamos los nuevos estilos

const Vision = () => {
  return (
    <div className="pagina-container">
      <div className="pagina-box">
        <img 
          src="https://res.cloudinary.com/diyd6flkf/image/upload/v1760021190/logo_spc3sb.png" 
          alt="Logo PHG Soluciones Contables" 
          className="pagina-logo" 
        />
        <h1>Nuestra Visión</h1>
        <p>
          Ser una firma líder en soluciones contables integrales en la región, reconocida por su innovación,
          ética profesional y acompañamiento cercano a cada cliente.
        </p>
        <Link to="/" className="pagina-btn-volver">Volver al Inicio</Link>
      </div>
    </div>
  );
};

export default Vision;
