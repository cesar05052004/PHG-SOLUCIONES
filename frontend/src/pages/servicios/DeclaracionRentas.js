import React from 'react';
import { Link } from 'react-router-dom';
import './ServicioDetalle.css';


const DeclaracionRentas = () => (
    <div className="servicios-container" style={{paddingTop: '100px'}} data-aos="fade-up">
      <h2 className="servicios-title">Declaración de Rentas</h2>
      <p>Ofrecemos asesoría personalizada para la declaración de renta de personas naturales y jurídicas. Nuestro equipo se encarga de analizar tu situación fiscal, identificar deducciones y beneficios, y garantizar el cumplimiento de la normativa vigente.</p>
      <ul>
        <li>Preparación y presentación de declaraciones ante la DIAN.</li>
        <li>Optimización de beneficios tributarios.</li>
        <li>Revisión de documentos y soportes fiscales.</li>
        <li>Atención de requerimientos y auditorías.</li>
      </ul>
      <p>Confía en PHG Soluciones para una gestión eficiente y segura de tu declaración de renta.</p>
      <Link to="/#contacto-form" className="servicios-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
);

export default DeclaracionRentas;
