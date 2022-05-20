import axios from 'axios';

// base url = https://fakerapi.it/api/v1/books

const api = axios.create({
    baseURL: 'https://fakerapi.it/',
});

export default api;