const http = require('http');
const app = require('./app');
const connectDB = require('./config/database');
const loadEnv = require('./config/env');

// Carregar variáveis de ambiente
loadEnv();

// Conectar ao banco de dados
connectDB();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
