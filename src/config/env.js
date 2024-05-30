const dotenv = require('dotenv');

const loadEnv = () => {
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
  console.log('Environment variables loaded');
};

module.exports = loadEnv;
