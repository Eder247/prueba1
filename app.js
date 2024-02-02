const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'bbwbtrlw7jfxpmwz1cyh-mysql.services.clever-cloud.com',
  user: 'uidbyiaitw85qdpa',
  password: 'zjGjAA9Sv5OdCXrYL1xo',
  database: 'bbwbtrlw7jfxpmwz1cyh'
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener y mostrar los datos
app.get('/', (req, res) => {
  db.query('SELECT nombre, email from admin', (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.message);
      res.status(500).json({ error: 'Error al obtener los datos de la base de datos' });
    } else {
      res.json(result);
    }
  });
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en línea en http://localhost:${port}`);
});
