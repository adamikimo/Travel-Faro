import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://travel-faro.herokuapp.com',
});

export default instance;