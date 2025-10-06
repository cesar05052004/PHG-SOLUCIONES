import React from 'react';
import { Link } from 'react-router-dom';
import './ServicioDetalle.css';


const AsesoriaContable = () => (
    <div className="servicios-container" style={{paddingTop: '100px'}}>
      <h2 className="servicios-title">Asesoría Contable</h2>
      <p>Brindamos acompañamiento integral en la gestión contable de tu empresa, asegurando la correcta organización de la información financiera y el cumplimiento de las obligaciones legales.</p>
      <ul>
        <li>Elaboración y análisis de estados financieros.</li>
        <li>Organización de libros contables.</li>
        <li>Implementación de sistemas contables.</li>
        <li>Capacitación y soporte a tu equipo administrativo.</li>
      </ul>
      <p>Tu tranquilidad financiera comienza con una contabilidad clara y confiable.</p>
      <Link to="/#contacto-form" className="servicios-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
);

export default AsesoriaContable;
