const express = require('express');
const app = express();

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde DevOps CI/CD con Node.js!');
});

// Render y otras PaaS suelen inyectar PORT
const port = process.env.PORT || 8080;

// Exportamos app para los tests; si se ejecuta directamente, arrancamos servidor
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

module.exports = app;
