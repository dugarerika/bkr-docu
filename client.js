// import axios library
import axios from 'axios';

// Destructuring
const { REACT_APP_API_BASE_URL: baseURL } = process.env;


// importamos un cliente que vamos a utilizar para hacer las peticiones a nuestro end points
const client = axios.create({

  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data);

export default client;


