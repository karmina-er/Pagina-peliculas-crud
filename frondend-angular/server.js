const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// La ruta correcta es 'dist/catalogo-peliculas' basado en tu angular.json
const appPath = path.join(__dirname, 'dist', 'catalogo-peliculas'); 
// --------------------

// Servir archivos estáticos
app.use(express.static(appPath));

// Manejar todas las rutas de Angular (para que F5 funcione)
app.get('/*', (req, res) => {
  res.sendFile(path.join(appPath, 'index.html'));
});

// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});