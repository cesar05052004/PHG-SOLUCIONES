import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Paginas.css'; // Importamos los nuevos estilos

const Mision = () => {
  return (
    <div className="pagina-container">
      <div className="pagina-box">
        <img 
          src="https://res.cloudinary.com/diyd6flkf/image/upload/v1760021190/logo_spc3sb.png" 
          alt="Logo PHG Soluciones Contables" 
          className="pagina-logo" 
        />
        <h1>Nuestra Misión</h1>
        <p>
          Somos una empresa especializada en la prestación de servicios contables y
          administrativos, comprometida con garantizar asesorías de alta calidad que contribuyan
          al desarrollo y crecimiento financiero de nuestros clientes, a través de un enfoque
          integral y personalizado, garantizamos soluciones efectivas que optimicen su gestión
          contable y fortalezcan su estabilidad económica.

        </p>
        <Link to="/" className="pagina-btn-volver">Volver al Inicio</Link>
      </div>
    </div>
  );
};

export default Mision;
