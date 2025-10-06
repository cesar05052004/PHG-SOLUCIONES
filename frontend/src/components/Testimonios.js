import React from 'react';
import '../styles/Testimonios.css';

const testimonios = [
  {
    nombre: 'María Rodríguez',
    texto: 'PHG Soluciones Contables me ayudó a organizar mi empresa y ahora tengo total control de mis finanzas. ¡Recomendados!'
  },
  {
    nombre: 'Juan Pérez',
    texto: 'Excelente servicio, atención personalizada y resultados rápidos. Muy satisfecho con el equipo.'
  },
  {
    nombre: 'Laura Gómez',
    texto: 'Gracias a PHG pude resolver problemas fiscales y mejorar la gestión contable de mi negocio.'
  }
];

const Testimonios = () => (
  <section className="testimonios-section">
    <h2 className="testimonios-title">Testimonios de nuestros clientes</h2>
    <div className="testimonios-list">
      {testimonios.map((t, idx) => (
        <div className="testimonio-card" key={idx}>
          <div className="testimonio-text">“{t.texto}”</div>
          <div className="testimonio-nombre">- {t.nombre}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonios;
