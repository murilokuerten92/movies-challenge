import axios from 'axios';

const api = axios.create({
    baseURL: 'https://challenge.outsera.tech/api/movies',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default api;