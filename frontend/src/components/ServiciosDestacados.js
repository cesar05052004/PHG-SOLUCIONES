import React from 'react';
import '../styles/ServiciosDestacados.css';

const servicios = [
  {
    icon: '/icons/outsourcing-contable.png',
    title: 'Outsourcing Contable',
    description: 'Delegue su contabilidad en expertos y enfóquese en el crecimiento de su negocio con total tranquilidad.'
  },
  {
    icon: '/icons/impuestos.png',
    title: 'Asesoría Tributaria',
    description: 'Optimizamos su carga fiscal y garantizamos el cumplimiento normativo para maximizar sus recursos.'
  },
  {
    icon: '/icons/auditoria.png',
    title: 'Auditoría y Finanzas',
    description: 'Aseguramos la transparencia y fiabilidad de su información financiera para la toma de decisiones estratégicas.'
  },
  {
    icon: '/icons/consultoria.png',
    title: 'Consultoría Empresarial',
    description: 'Impulsamos la eficiencia y el desarrollo de su empresa a través de soluciones personalizadas y efectivas.'
  }
];

const ServiciosDestacados = () => (
  <section className="servicios-destacados-section">
    <h2 className="servicios-destacados-title">Soluciones a la medida de su empresa</h2>
    <div className="servicios-destacados-grid">
      {servicios.map((servicio, index) => (
        <div key={index} className="servicio-card">
          <img src={servicio.icon} alt={servicio.title} className="servicio-card-icon" />
          <h3 className="servicio-card-title">{servicio.title}</h3>
          <p className="servicio-card-description">{servicio.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiciosDestacados;