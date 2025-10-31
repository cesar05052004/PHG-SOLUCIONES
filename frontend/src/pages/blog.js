import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

// Los datos de los videos están ahora directamente en este archivo.
const videoData = [
  {
    id: 3,
    title: '4 años con PHG Soluciones Contables',
    summary: 'Celebramos desde el año 2021 con nuestro equipo de profesionales, nuestra vuelta al sol brindando soluciones accesibles a nivel nacional e internacional.',
    videoUrl: 'https://res.cloudinary.com/diyd6flkf/video/upload/v1761919162/Video_de_WhatsApp_2025-09-20_a_las_10.28.47_f0ff2a89_nenhl8.mp4', // Reemplaza con la URL de tu video real
  },
  {
    id: 3,
    title: 'PHG Soluciones y Law Expert Group',
    summary: 'Contadores y abogados trabajando juntos por la seguridad y crecimiento de tu empresa. ⚖ En PHG Soluciones y Law Expert Group, tu negocio está en buenas manos. Contáctanos y crece con respaldo profesional.',
    videoUrl: 'https://res.cloudinary.com/diyd6flkf/video/upload/v1761919162/Video_de_WhatsApp_2025-10-08_a_las_16.34.00_04e3e425_pkbbxu.mp4', // Reemplaza con la URL de tu video real
  },
  {
    id: 2,
    title: 'En PHG Soluciones apoyamos el deporte.',
    summary: 'Con sentido social apoyamos el deporte. En PHG soluciones contables creemos en el poder del deporte para transformar vidas y comunidades. Por eso, nos enorgullece apoyar eventos deportivos locales que fomentan la inclusión, el trabajo en equipo y un estilo de vida saludable.',
    videoUrl: 'https://res.cloudinary.com/diyd6flkf/video/upload/v1761918355/Video_de_WhatsApp_2025-10-31_a_las_08.40.31_8f34e972_ji3d25.mp4', // Reemplaza con la URL de tu video real
  },
  {
    id: 1,
    title: 'PHG Soluciones y Law Expert Group',
    summary: '',
    videoUrl: 'https://res.cloudinary.com/diyd6flkf/video/upload/v1761920040/Video_de_WhatsApp_2025-10-31_a_las_09.04.53_2d66cac1_yotnmm.mp4', // Reemplaza con la URL de tu video real
  },
  {
    id: 1,
    title: 'Declaración de Renta Persona Natural 2025 - Siempre se puede',
    summary: 'Siempre se puede, porque el poder está en la mente, gracias a Dios que ha sido un año de gran crecimiento para PHG soluciones contables vamos cerrando este ciclo de declaración de renta persona natural, con conocimiento reforzado y nuevos clientes',
    videoUrl: 'https://res.cloudinary.com/diyd6flkf/video/upload/v1761917860/V%C3%ADdeo_sin_t%C3%ADtulo_Hecho_con_Clipchamp_lr7sqe.mp4', // Reemplaza con la URL de tu video real
  },
  {
    id: 1,
    title: 'Declaración de Renta 2025',
    summary: 'En PHG Soluciones Contables te ayudamos a cumplir con tus obligaciones tributarias de forma rápida, segura y sin complicaciones. ✅Asesoría personalizada ✅Análisis detallado de tus ingresos y deducciones ✅Presentación correcta ante la DIAN. Evita sanciones y asegura una declaración sin errores. 📞Contáctanos y deja tu renta en manos de expertos.',
    videoUrl: 'https://res.cloudinary.com/diyd6flkf/video/upload/v1761920032/Video_de_WhatsApp_2025-10-31_a_las_09.05.07_6cb4a45e_ye8d1n.mp4', // Reemplaza con la URL de tu video real
  },

];

const Blog = () => {
  // Usamos un ref para mantener una lista de todas las etiquetas de video
  const videoRefs = useRef([]);

  // Esta función se ejecuta cuando un video empieza a reproducirse
  const handlePlay = (playedIndex) => {
    // Recorremos todos los videos
    videoRefs.current.forEach((video, index) => {
      // Si el video no es el que se está reproduciendo y no está pausado, lo pausamos.
      if (video && index !== playedIndex && !video.paused) {
        video.pause();
        // Y reiniciamos su tiempo al principio.
        video.currentTime = 0;
      }
    });
  };

  return (
    <div className="blog-container">
      <Link to="/" className="pagina-btn-volver blog-volver-arriba">← Volver al Inicio</Link>
      <img src="https://res.cloudinary.com/diyd6flkf/image/upload/v1760021190/logo_spc3sb.png" alt="Logo PHG Soluciones" className="blog-logo" />
      <h1 className="blog-main-title">Nuestro Blog</h1>
      <p className="blog-intro">
        Descubre nuestras últimas novedades, proyectos y la esencia de nuestra empresa a través de nuestros videos.
      </p>
      <div className="blog-posts-grid">
        {videoData.map((post, index) => (
          <div key={post.id} className="blog-post-card">
            <div className="blog-video-container">
              {/* Cambiamos de iframe a la etiqueta video para un mejor control */}
              <video
                // Añadimos cada video al array de refs
                ref={el => videoRefs.current[index] = el}
                className="blog-post-video"
                src={post.videoUrl}
                title={post.title}
                controls
                onPlay={() => handlePlay(index)} // Llamamos a handlePlay cuando se reproduce
                loop
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            {/* Contenido de texto debajo del video */}
            <div className="blog-post-content">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-excerpt">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
