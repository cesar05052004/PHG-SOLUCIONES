import React from 'react';
import '../styles/ServiciosDestacados.css';

const servicios = [
  {
    icon: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760021216/outsourcing-contable_vb7r10.jpg',
    title: 'Servicios Contables',
    description:
      'Delegue su contabilidad en expertos y enfóquese en el crecimiento de su negocio con total tranquilidad.',
  },
  {
    icon: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760021216/impuestos_wtaisv.jpg',
    title: 'Asesoría Tributaria',
    description:
      'Optimizamos su carga fiscal y garantizamos el cumplimiento normativo para maximizar sus recursos.',
  },
  {
    icon: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760621139/procesos-transito_dbqdxv.jpg',
    title: 'Procedimientos de Transito',
    description:
      'Ofrecemos asesoría jurídica especializada para apelar comparendos, sanciones por embriaguez y otras infracciones de tránsito, garantizando una defensa efectiva y personalizada.',
  },
  {
    icon: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760021215/consultoria_phgdke.jpg',
    title: 'Asesoría Financiera',
    description:
      'Optimizamos la gestión económica de su negocio mediante estrategias financieras eficientes y sostenibles.',
  },
];

const ServiciosDestacados = () => (
  <section className="servicios-destacados-section">
    <h2 className="servicios-destacados-title">Soluciones a la medida de su empresa</h2>
    <div className="servicios-destacados-grid">
      {servicios.map((servicio, index) => (
        <div key={index} className="servicio-card">
          <img
            src={servicio.icon}
            alt={servicio.title}
            className="servicio-card-icon"
            loading="lazy"
          />
          <h3 className="servicio-card-title">{servicio.title}</h3>
          <p className="servicio-card-description">{servicio.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiciosDestacados;
