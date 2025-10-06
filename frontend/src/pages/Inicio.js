import React from 'react';
import '../styles/Inicio.css';
import Hero from '../components/Hero';
import ContactoForm from '../components/ContactoForm';
import ClientesCarrusel from '../components/ClientesCarrusel';
import Testimonios from '../components/Testimonios';
import Equipo from '../components/Equipo';
import ServiciosDestacados from '../components/ServiciosDestacados';
import CtaSection from '../components/CtaSection';
import useScrollToHash from '../components/useScrollToHash';

const Inicio = () => {
  // Hook para desplazarse a un ancla (ej: #contacto-form)
  useScrollToHash();

  return (
    <div className="inicio-container">
      {/* Secciones */}
      <Hero />
      <ContactoForm />
      <ServiciosDestacados />
      <CtaSection />
      <Testimonios />
      <Equipo />
      <ClientesCarrusel />

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-contact-info">
          <div className="footer-contact-item">
            <strong>Dirección:</strong> Calle 29 #1-2, Oficina 201, al lado del casino, Monteria, Colombia
          </div>
          <div className="footer-contact-item">
            <strong>Email:</strong> phgsolucionescontables@gmail.com
          </div>
          <div className="footer-contact-item">
            <strong>Teléfono:</strong> (+57) 305 357 4051
          </div>
        </div>
        <div className="footer-copyright">© 2025 PHG Soluciones Contables.</div>
      </footer>
    </div>
  );
};

export default Inicio;
