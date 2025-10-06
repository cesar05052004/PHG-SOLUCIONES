import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ServicioDetalle.css';


const OutsourcingContable = () => (
    <div className="servicios-container" style={{paddingTop: '100px'}}>
      <h2 className="servicios-title">Outsourcing Contable</h2>
      <p>Externaliza la gestión contable de tu empresa y enfócate en lo que realmente importa: el crecimiento de tu negocio.</p>
      <ul>
        <li>Administración y registro de operaciones contables.</li>
        <li>Elaboración de informes financieros periódicos.</li>
        <li>Confidencialidad y cumplimiento legal garantizados.</li>
        <li>Soporte y asesoría continua.</li>
      </ul>
      <p>Deja tu contabilidad en manos expertas y optimiza tus recursos.</p>
      <Link to="/#contacto-form" className="servicios-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
);

export default OutsourcingContable;
