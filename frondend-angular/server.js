const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Ruta de los archivos compilados de Angular
// Ajusta si tu server.js está dentro de frontend-angular
const appPath = path.join(__dirname, 'dist/catalogo-peliculas');

// Servir archivos estáticos de Angular
app.use(express.static(appPath));

// Manejar todas las rutas (para que F5 o rutas internas funcionen)
app.get('/*', (req, res) => {
  res.sendFile(path.join(appPath, 'index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
