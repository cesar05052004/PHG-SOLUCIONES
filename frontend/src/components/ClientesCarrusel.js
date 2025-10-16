import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ClientesCarrusel.css';
import { Link } from 'react-router-dom';

const clientes = [
  { nombre: 'Maxalcotex', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760539179/maxalcotex_pytxgt.jpg' },
  { nombre: 'Marianne', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760539178/marianne_q7a9hf.jpg' },
  { nombre: 'Gecco', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760539178/mavanna_hzmbxf.jpg' },
  { nombre: 'Law Expert Grup', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760540448/leg_gmwlns.jpg' },
  { nombre: 'Cerete Nutrition', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760540062/Captura_de_pantalla_2025-10-15_095356_mbfrgu.png' },
  { nombre: 'La Bodega', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760539177/la-bodega_w41mss.png' },
  { nombre: 'Infraestructura Hospitalaria', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760539947/Captura_de_pantalla_2025-10-15_095202_nona0y.png' },
  { nombre: 'Ser Optica', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760539179/ser-optica_sz4lpz.png' },
  { nombre: 'Inclusive Sport', img: 'https://res.cloudinary.com/diyd6flkf/image/upload/v1760539767/inclusive-sport_j9punq.png' },
];

const ClientesCarrusel = () => {
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        speed: 480,
        autoplaySpeed: 0,
        cssEase: "linear"
      }
    }
  ]
};

  return (
    <div className="clientes-section">
      <h2 className="clientes-title">Empresas que confían en nosotros</h2>


      <div className="clientes-carousel-wrapper">
        <Slider {...settings} className="clientes-carrusel">
          {clientes.map((cliente, idx) => (
            <div key={idx} className="cliente-logo">
              <img src={cliente.img} alt={cliente.nombre} loading="lazy" />
            </div>
          ))}
        </Slider>
      </div>
      <Link to="/#contacto-form" className="clientes-btn">
        ¡SOLICITA UNA ASESORÍA AHORA!
      </Link>
    </div>
  );
};

export default ClientesCarrusel;