import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-karlos.herokuapp.com'
});

export default api;