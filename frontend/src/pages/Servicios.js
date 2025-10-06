
import React, { useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/Servicios.css';

import DeclaracionRentas from './servicios/DeclaracionRentas';
import AsesoriaContable from './servicios/AsesoriaContable';
import AuditoriaFinanciera from './servicios/AuditoriaFinanciera';
import GestionTributaria from './servicios/GestionTributaria';
import ConsultoriaEmpresarial from './servicios/ConsultoriaEmpresarial';
import OutsourcingContable from './servicios/OutsourcingContable';

const Servicios = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundImage = "url('/fondo-naranja.png')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.minHeight = "100vh";
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.minHeight = "";
    };
  }, []);
  return (
    <div className="servicios-container">
      <button onClick={() => navigate(-1)} className="servicios-btn" style={{marginBottom: '1.5rem'}}>
        Regresar
      </button>
      <h2 className="servicios-title">Servicios</h2>
      <ul className="servicios-list">
        <li><Link to="declaracion-rentas">Declaración de rentas</Link></li>
        <li><Link to="asesoria-contable">Asesoría contable</Link></li>
        <li><Link to="auditoria-financiera">Auditoría financiera</Link></li>
        <li><Link to="gestion-tributaria">Gestión tributaria</Link></li>
        <li><Link to="consultoria-empresarial">Consultoría empresarial</Link></li>
        <li><Link to="outsourcing-contable">Outsourcing contable</Link></li>
      </ul>

      <Routes>
        <Route path="declaracion-rentas" element={<DeclaracionRentas />} />
        <Route path="asesoria-contable" element={<AsesoriaContable />} />
        <Route path="auditoria-financiera" element={<AuditoriaFinanciera />} />
        <Route path="gestion-tributaria" element={<GestionTributaria />} />
        <Route path="consultoria-empresarial" element={<ConsultoriaEmpresarial />} />
        <Route path="outsourcing-contable" element={<OutsourcingContable />} />
      </Routes>
    </div>
  );
};

export default Servicios;
