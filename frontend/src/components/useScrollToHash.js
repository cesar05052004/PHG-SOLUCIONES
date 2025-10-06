import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  // Usamos location.key para que el efecto se vuelva a ejecutar
  // incluso si solo cambia el hash en la misma ruta.
  }, [location.key, location.hash, location]);
};

export default useScrollToHash;