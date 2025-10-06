import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactoForm.css';

const ContactoForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('Enviando...');

    // --- PEGA TUS CREDENCIALES DE EMAILJS AQUÍ ---
    const serviceID = 'service_19n68oo';
    const templateID = 'template_g8vss9a';
    const publicKey = 'L8chB4ksJAFBcA58b';
    // -------------------------------------------

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setStatusMessage('¡Mensaje enviado con éxito!');
        form.current.reset();
        setTimeout(() => setStatusMessage(''), 5000); // Limpia el mensaje después de 5 segundos
      }, (error) => {
        console.log(error.text);
        setStatusMessage('Error al enviar. Inténtalo de nuevo.');
        setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <section id="contacto-form" className="contactoform-section">
      <h3 className="contactoform-subtitle">CONTÁCTANOS HOY</h3>
      <h2 className="contactoform-title">¡Encuentra al líder que transformará tu empresa con nosotros!</h2>
      <form ref={form} onSubmit={sendEmail} className="contactoform-form" autoComplete="off">
        {/* Los atributos 'name' deben coincidir con las variables de tu plantilla de EmailJS */}
        <input type="text" name="user_name" placeholder="Nombre completo" required autoComplete="name" />
        <div className="contactoform-row">
          <input type="tel" name="user_contact" placeholder="🇨🇴 Número de contacto" required autoComplete="tel" />
          <input type="email" name="user_email" placeholder="Email" required autoComplete="email" />
        </div>
        <div className="contactoform-row">
          <input type="text" name="user_company" placeholder="Empresa" autoComplete="organization" />
          <input type="text" name="user_position" placeholder="Cargo" autoComplete="organization-title" />
        </div>
        <textarea name="message" placeholder="Escribe tu mensaje aquí..." rows={4} required />
        <div className="contactoform-legal">
          <input type="checkbox" id="acepto" name="acepto_politica" required />
          <label htmlFor="acepto">Acepto la Política de Tratamiento de Datos</label>
        </div>
        <button type="submit" className="contactoform-btn">¡SOLICITA UNA ASESORÍA AHORA!</button>
        {statusMessage && <div className="status-message">{statusMessage}</div>}
      </form>
    </section>
  );
};

export default ContactoForm;
