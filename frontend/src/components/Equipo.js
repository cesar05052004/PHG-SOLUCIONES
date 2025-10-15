import React from 'react';
import '../styles/Equipo.css';

const equipo = [
  {
    nombre: 'Ana Martínez',
    cargo: 'Gerente General',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1/equipo/placeholder.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'Carlos Pérez',
    cargo: 'Contador Senior',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1/equipo/placeholder.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'Laura Gómez',
    cargo: 'Asistente Contable',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1/equipo/placeholder.jpg' // <-- Reemplazar con la URL real
  }
];

const Equipo = () => (
  <section className="equipo-section">
    <h2 className="equipo-title">Nuestro equipo</h2>
    <div className="equipo-list">
      {equipo.map((persona, idx) => (
        <div className="equipo-card" key={idx}>
          <img src={persona.foto} alt={persona.nombre} className="equipo-foto" />
          <div className="equipo-nombre">{persona.nombre}</div>
          <div className="equipo-cargo">{persona.cargo}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Equipo;
