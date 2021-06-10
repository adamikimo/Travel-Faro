import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-travelfaro-backend.cloudfunctions.net/app',
});

export default instance;