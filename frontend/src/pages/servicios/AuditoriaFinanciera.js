import React from 'react';
import { Link } from 'react-router-dom';
import './ServicioDetalle.css';


const AuditoriaFinanciera = () => (
    <div className="servicios-container" style={{paddingTop: '100px'}}>
      <h2 className="servicios-title">Auditoría Financiera</h2>
      <p>Realizamos auditorías financieras exhaustivas para evaluar la transparencia y confiabilidad de los procesos contables de tu empresa.</p>
      <ul>
        <li>Revisión de registros y documentos contables.</li>
        <li>Identificación de riesgos y oportunidades de mejora.</li>
        <li>Informe de hallazgos y recomendaciones.</li>
        <li>Acompañamiento en la implementación de controles internos.</li>
      </ul>
      <p>Garantiza la confianza de tus socios e inversionistas con auditorías profesionales.</p>
      <Link to="/#contacto-form" className="servicios-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
);

export default AuditoriaFinanciera;
