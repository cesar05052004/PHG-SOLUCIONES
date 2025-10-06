import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ClientesCarrusel.css';
import { Link } from 'react-router-dom';

const clientes = [
  { nombre: 'Edificio Corporativo', img: '/clientes/edificio-corporativo.png' },
  { nombre: 'Maxalcotex', img: '/clientes/maxalcotex.png' },
  { nombre: 'Maxalcotex', img: '/clientes/marianne.png' },
  { nombre: 'Maxalcotex', img: '/clientes/mavanna.png' },
  { nombre: 'Edificio Corporativo', img: '/clientes/edificio-corporativo.png' },
  { nombre: 'Edificio Corporativo', img: '/clientes/edificio-corporativo.png' },
  { nombre: 'Edificio Corporativo', img: '/clientes/edificio-corporativo.png' },
];

const ClientesCarrusel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000, // Duración de la animación (más alto = más lento)
    autoplaySpeed: 0, // Sin pausa entre transiciones
    cssEase: "linear", // Movimiento a velocidad constante
    pauseOnHover: true, // Se detiene al pasar el ratón
    arrows: false, // Oculta las flechas de navegación
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <div className="clientes-section">
      <h2 className="clientes-title">Empresas que confían en nosotros</h2>
      <Slider {...settings} className="clientes-carrusel">
        {clientes.map((cliente, idx) => (
          <div key={idx} className="cliente-logo">
            <img src={cliente.img} alt={cliente.nombre} />
          </div>
        ))}
      </Slider>
      <Link to="/#contacto-form" className="clientes-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
  );
};

export default ClientesCarrusel;