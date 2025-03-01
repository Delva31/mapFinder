const appConfig = require('./app');

const PORT = process.env.PORT || 4000;

appConfig.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});