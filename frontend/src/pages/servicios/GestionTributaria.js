import React from 'react';
import { Link } from 'react-router-dom';
import './ServicioDetalle.css';


const GestionTributaria = () => (
    <div className="servicios-container" style={{paddingTop: '100px'}}>
      <h2 className="servicios-title">Gestión Tributaria</h2>
      <p>Te ayudamos a planificar y cumplir con todas tus obligaciones tributarias, optimizando el pago de impuestos y evitando sanciones.</p>
      <ul>
        <li>Planificación fiscal estratégica.</li>
        <li>Presentación de declaraciones tributarias.</li>
        <li>Representación ante entidades fiscales.</li>
        <li>Asesoría en normatividad tributaria vigente.</li>
      </ul>
      <p>Maximiza tus recursos y cumple con la ley de la mano de expertos.</p>
      <Link to="/#contacto-form" className="servicios-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
);

export default GestionTributaria;
