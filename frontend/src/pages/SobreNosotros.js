import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SobreNosotros.css';
import Equipo from '../components/Equipo';

const SobreNosotros = () => {
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
    <div className="sobre-container">
      <button onClick={() => navigate(-1)} className="servicios-btn" style={{marginBottom: '1.5rem'}}>
        Regresar
      </button>
      <h2 className="sobre-title">Sobre Nosotros</h2>
      <p className="sobre-desc">Somos un equipo de profesionales con más de 10 años de experiencia en el sector contable y financiero, comprometidos con la excelencia y la confianza de nuestros clientes.</p>
      <p className="sobre-desc">Nuestra misión es brindar soluciones integrales y personalizadas para el crecimiento de tu empresa.</p>
      <Equipo />
    </div>
  );
};

export default SobreNosotros;
