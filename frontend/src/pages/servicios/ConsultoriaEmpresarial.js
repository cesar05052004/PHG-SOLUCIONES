import React from 'react';
import { Link } from 'react-router-dom';
import './ServicioDetalle.css';


const ConsultoriaEmpresarial = () => (
    <div className="servicios-container" style={{paddingTop: '100px'}}>
      <h2 className="servicios-title">Consultoría Empresarial</h2>
      <p>Impulsa el crecimiento de tu empresa con nuestro servicio de consultoría, enfocado en la mejora de procesos y la gestión estratégica.</p>
      <ul>
        <li>Análisis y optimización de procesos internos.</li>
        <li>Gestión de riesgos empresariales.</li>
        <li>Desarrollo de estrategias de crecimiento.</li>
        <li>Mejora continua y capacitación empresarial.</li>
      </ul>
      <p>Transforma tu empresa con soluciones innovadoras y personalizadas.</p>
      <Link to="/#contacto-form" className="servicios-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
);

export default ConsultoriaEmpresarial;
