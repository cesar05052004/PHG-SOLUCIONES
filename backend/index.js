const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  // Configura tu transporte de correo aquí
  // Ejemplo: enviar correo con nodemailer
  res.json({ ok: true, msg: 'Mensaje recibido' });
});

app.listen(4000, () => {
  console.log('Backend corriendo en puerto 4000');
});
