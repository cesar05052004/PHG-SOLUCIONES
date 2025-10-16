import React from 'react';
import '../styles/Equipo.css';

const equipo = [
  {
    nombre: 'Wendy Garcia',
    cargo: 'Directora Ejecutiva',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760623069/directora-ejecutiva_alroc4.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'Elizeth Ayala',
    cargo: 'Directora Administrativa',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760623069/directora-administrativa-financiera_mqmfwy.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'Luis Herazo',
    cargo: 'Contador',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760623068/contador-luis_tqw2at.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'María Reyes',
    cargo: 'Subdirectora Administrativa Financiera',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760623069/subdirectora-adminis-financiera_awrznq.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'Luisa Vallejo',
    cargo: 'Profesional en investigacion y desarrollo.',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760623070/investigacion-desarrollo-luisa_zbqn2j.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'Yaniris Gomez',
    cargo: 'Auxiliar Contable',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760623069/auxiliar-contable-yaniris_o6h0mt.jpg' // <-- Reemplazar con la URL real
  },
  {
    nombre: 'Claudia Reyes',
    cargo: 'Auxiliar Contable y Administrativa',
    foto: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760626528/auxiliar-contable-admin-claudia_2_lnz2l1.jpg' // <-- Reemplazar con la URL real
  },

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
